## [3.0.5](https://github.com/technology-studio/eslint-config-txo-typescript/compare/v3.0.4...v3.0.5) (2022-08-21)


### CI

* disable debug mode ([ccdb27e](https://github.com/technology-studio/eslint-config-txo-typescript/commit/ccdb27ed30a2c29dad7e393073f68c620d3026fe))
* fix by gh token ([bf89164](https://github.com/technology-studio/eslint-config-txo-typescript/commit/bf8916415b87a45e385395e11add7fa9195b6a3a))


### Bug fixes

* allow txo semantic release app to push on protected branch ([652f65f](https://github.com/technology-studio/eslint-config-txo-typescript/commit/652f65fa25ff7ed1fad75d53a6e27c61d022c57f))
* remove github app fro semantic release ([809450f](https://github.com/technology-studio/eslint-config-txo-typescript/commit/809450f69c5b9834580895a11ace644172561394))

## [3.0.4](https://github.com/technology-studio/eslint-config-txo-typescript/compare/v3.0.3...v3.0.4) (2022-08-21)


### Bug fixes

* add debug info ([#32](https://github.com/technology-studio/eslint-config-txo-typescript/issues/32)) ([c362794](https://github.com/technology-studio/eslint-config-txo-typescript/commit/c362794a7106c46b53d46662364d6e7c3337d2ad))
* f4 ([5b66618](https://github.com/technology-studio/eslint-config-txo-typescript/commit/5b666189e3a877b565596e4864b6772c89eeaf99))
* fetch-depth: 0 for actions/checkout ([#30](https://github.com/technology-studio/eslint-config-txo-typescript/issues/30)) ([1cd252e](https://github.com/technology-studio/eslint-config-txo-typescript/commit/1cd252e03062443d1ea175e3e1637b721103a6b7))
* semantic-release by github app token workaround ([#31](https://github.com/technology-studio/eslint-config-txo-typescript/issues/31)) ([3b681c3](https://github.com/technology-studio/eslint-config-txo-typescript/commit/3b681c3387c4a951049ab3ea9738175ee2134d47))
* test 2 ([dec60ec](https://github.com/technology-studio/eslint-config-txo-typescript/commit/dec60eca7f3378d6d4b116488bb13511de64534a))

## [3.0.3](https://github.com/technology-studio/eslint-config-txo-typescript/compare/v3.0.2...v3.0.3) (2022-08-21)


### Bug fixes

* use semantic release github app for writing artifacts ([00cf9bc](https://github.com/technology-studio/eslint-config-txo-typescript/commit/00cf9bca87761e48d231b3fab624616c236bfd1d))

## [3.0.2](https://github.com/technology-studio/eslint-config-txo-typescript/compare/v3.0.1...v3.0.2) (2022-08-21)


### Bug fixes

* add propagation of SEMANTIC_RELEASE_SLACK_WEBHOOK ([7f39e47](https://github.com/technology-studio/eslint-config-txo-typescript/commit/7f39e47a256c2730d1b4216ec2af15dae6e9f9e0))
* remove forgotten semantic-release slack webhooks override ([57ebf48](https://github.com/technology-studio/eslint-config-txo-typescript/commit/57ebf4835d1bfa7b3420416ad02049a7dda0b089))

## [3.0.1](https://github.com/technology-studio/eslint-config-txo-typescript/compare/v3.0.0...v3.0.1) (2022-08-21)


### Bug fixes

* semantic-release-slack-bot integration ([c297c63](https://github.com/technology-studio/eslint-config-txo-typescript/commit/c297c63d4d7cdf55a5406bb4c26bef70206ce227))

## [3.0.0](https://github.com/technology-studio/eslint-config-txo-typescript/compare/v2.3.1...v3.0.0) (2022-08-21)


### ⚠ BREAKING CHANGES

* eslint upgrade and package rules refactor
* upgrade to eslint@8.x.x (#28)

### Features

* upgrade to eslint@8.x.x ([#28](https://github.com/technology-studio/eslint-config-txo-typescript/issues/28)) ([56cba88](https://github.com/technology-studio/eslint-config-txo-typescript/commit/56cba889f0a13214b893f1e4909b7f59c133c767))
* upgrade to eslint@8.x.x and package rules refactor ([6451779](https://github.com/technology-studio/eslint-config-txo-typescript/commit/645177930a32455591c165537e5a6cc57c0ce117))


### Build system / dependencies

* add commit lint and commitizen to ensure conventional commit messages ([#26](https://github.com/technology-studio/eslint-config-txo-typescript/issues/26)) ([118a425](https://github.com/technology-studio/eslint-config-txo-typescript/commit/118a42561efcaf25dbfa71207c4791609bf476bd))
* flatten package by removing workspaces ([ab490ca](https://github.com/technology-studio/eslint-config-txo-typescript/commit/ab490ca8d415946029aceec30c9b8204cf44a038))
* force renovate to use semantic commits ([d922b3c](https://github.com/technology-studio/eslint-config-txo-typescript/commit/d922b3c314be6d801d09122299ec5e7ebfe6468a))
* force renovate to use semantic commits ([#24](https://github.com/technology-studio/eslint-config-txo-typescript/issues/24)) ([402026a](https://github.com/technology-studio/eslint-config-txo-typescript/commit/402026a30cf8ed7c37f9cb091a5628b8fb581631))
* remove pre-push husky hook ([358425a](https://github.com/technology-studio/eslint-config-txo-typescript/commit/358425a8ac6e11855179a32945c4e14de3e9e35b))
* supress errors in precommit msg hook ([74b9ff7](https://github.com/technology-studio/eslint-config-txo-typescript/commit/74b9ff7805f40bf3296991ed2bc4323d673fe79d))


### CI

* add automergeMinor present to renovate config ([40a8c2d](https://github.com/technology-studio/eslint-config-txo-typescript/commit/40a8c2d058628e8459693e51f58af3e3950620e0))
* add github action to ensure semantic PR title ([#25](https://github.com/technology-studio/eslint-config-txo-typescript/issues/25)) ([558ceb4](https://github.com/technology-studio/eslint-config-txo-typescript/commit/558ceb44b8225a67c4cd5a9bf2d0a61d3ae9406f))
* add lint commit status check ([485fe8c](https://github.com/technology-studio/eslint-config-txo-typescript/commit/485fe8ca42fbf2e5e46f1ac6d3f66a76dd43b09a))
* fix dry run on semantic release ([dfcf95e](https://github.com/technology-studio/eslint-config-txo-typescript/commit/dfcf95e46175b0907a8e49ef8a96a71b67e4416b))
* remove dry-run from semantic-release ([de862cc](https://github.com/technology-studio/eslint-config-txo-typescript/commit/de862cc43ac6da68df06f21ead0d047e807f162d))
* semantic release setup ([#27](https://github.com/technology-studio/eslint-config-txo-typescript/issues/27)) ([edc9897](https://github.com/technology-studio/eslint-config-txo-typescript/commit/edc989740b8e624a3807e4e89070fb59da95ed18))
* suppress commitlint for release commits ([2c446b7](https://github.com/technology-studio/eslint-config-txo-typescript/commit/2c446b7d29798951fbc4ab9be4bf31ee30388f8d))
