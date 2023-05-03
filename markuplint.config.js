// @ts-check

// eslint-disable-next-line jsdoc/valid-types -- https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
/** @typedef {import('@markuplint/ml-config').Config} Config */

/**
 * @type {Config}
 * @see https://markuplint.dev/docs/configuration
 */
const config = {
  extends: [
    'markuplint:recommended'
  ],
  excludeFiles: [
    './node_modules/**/*'
  ]
}

module.exports = config
