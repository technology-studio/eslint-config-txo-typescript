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
const ESLINT_CRASH_EXIT_CODE = 1

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
      writeFileSync('eslint-ci-rules.json', `${JSON.stringify([...errorRuleSet], null, 2)}\n`)
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
  .command<{ cache: boolean }>(
    ['validate-eslint-run', 'ver'],
    'Runs ESLint and returns success if ESLint runs properly (even with lint errors)',
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
      console.log('Running ESLint...')
      const ciEslint = new ESLint(
        {
          overrideConfigFile: 'eslint-ci.config.js',
          cache: argv.cache,
        },
      )
      try {
        const lintResults = await ciEslint.lintFiles(['.'])
        console.log('ESLint ran successfully')
        console.log(`Results:`)
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- initial number of warnings is 0
        console.log(`Number of warnings: ${lintResults.reduce((acc, result) => acc + result.warningCount, 0)}`)
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers -- initial number of errors is 0
        console.log(`Number of errors: ${lintResults.reduce((acc, result) => acc + result.errorCount, 0)}`)
      } catch (e) {
        console.error('ESLint failed to run')
        console.error(e)
        process.exit(ESLINT_CRASH_EXIT_CODE)
      }
    },
  )
  .demandCommand()
  .help()
  .argv
