#!/usr/bin/env node
/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2024-12-05T14:51:46+01:00
 * @Copyright: Technology Studio
**/
/* eslint-disable no-console -- NOTE: enable logging for CLI */

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { ESLint } from 'eslint'
import {
  readFileSync, writeFileSync,
} from 'fs'

const ERROR_SEVERITY = 2
const WARN_SEVERITY = 1
const UNUSED_RULES_EXIT_CODE = 1

// Define the `update-ci-rules` command
void yargs(hideBin(process.argv))
  .command(
    ['update-ci-rules', 'ucr'],
    'Update the CI rules',
    () => undefined,
    async () => {
      console.log('Updating CI rules...')
      const eslint = new ESLint(
        {
          overrideConfigFile: 'eslint.config.js',
        },
      )
      const errorRuleSet = new Set<string>()
      const lintResults = await eslint.lintFiles(['.'])
      lintResults.forEach((result) => {
        result.messages.forEach((message) => {
          if (message.ruleId != null && message.severity === ERROR_SEVERITY) {
            if ((/Definition for rule '.*' was not found/.exec(message.message)) != null) {
              console.log(`Rule ${message.ruleId} is not defined in eslint config, skipping...`)
              return
            }
            errorRuleSet.add(message.ruleId)
          }
        })
      })

      // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- JSON string indentation - 2 spaces
      writeFileSync('eslint-ci-rules.json', JSON.stringify([...errorRuleSet], null, 2))
    },
  )
  .command<{ cache: boolean }>(
    ['check-ci-rules', 'ccr'],
    'Check the CI rules',
    (yargs) => {
      yargs
        .option('cache', {
          type: 'boolean',
          description: 'Use the ESLint cache',
          default: false,
        })
        .strict()
    },
    async (argv) => {
      console.log('Checking CI rules...')
      const ciEslint = new ESLint(
        {
          overrideConfigFile: 'eslint-ci.config.js',
          cache: argv.cache,
        },
      )
      const currentlyIgnoredRulesFile = readFileSync('eslint-ci-rules.json', 'utf8')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- NOTE: rules file can only contain a list of strings
      const currentlyIgnoredRuleList = JSON.parse(currentlyIgnoredRulesFile) as string[]
      if (!Array.isArray(currentlyIgnoredRuleList)) {
        throw new Error('Invalid format of the rules file')
      }
      const currentlyIgnoredRuleSet = new Set<string>(currentlyIgnoredRuleList)
      const warnRuleSet = new Set<string>()
      const lintResults = await ciEslint.lintFiles(['.'])
      lintResults.forEach((result) => {
        result.messages.forEach((message) => {
          if (message.ruleId != null && message.severity === WARN_SEVERITY) {
            warnRuleSet.add(message.ruleId)
          }
        })
      })
      const unusedRules = currentlyIgnoredRuleSet.difference(warnRuleSet)
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- NOTE: show an error if there are unused rules
      if (unusedRules.size > 0) {
        console.error('Unused rules:')
        console.error([...unusedRules])
        process.exit(UNUSED_RULES_EXIT_CODE)
      }
    },
  )
  .demandCommand()
  .help()
  .argv
