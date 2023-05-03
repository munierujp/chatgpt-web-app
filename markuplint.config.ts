import { Config } from '@markuplint/ml-config'

// https://markuplint.dev/docs/configuration
const config: Config = {
  extends: [
    'markuplint:recommended'
  ],
  excludeFiles: [
    './node_modules/**/*'
  ]
}

export default config
