const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({ type: 'node' })

module.exports = {
  extends: [
    ...extendConfigs,
    // 확장할 규칙 이름...
  ],
  overrides: [
    ...overrides,
    // 특정 파일 대상 규칙...
  ],
  parser: '@babel/eslint-parser',
}
