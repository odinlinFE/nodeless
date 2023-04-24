module.exports = {
  root: true,
  extends: [
    'eslint-config-next',
    '@antfu/eslint-config-ts',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  settings: {
    next: {
      rootDir: ['.'],
    },
  },
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // curly braces in object
    'curly': ['error', 'multi-line', 'consistent'],
    // 每行最大语句数, 例如：`if (语句1) { 语句2 }`
    'max-statements-per-line': ['error', { max: 2 }],
    // [import/order](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)
    'import/order': ['error',
      {
        'groups': ['builtin', 'external', ['internal', 'parent', 'sibling', 'index'], 'unknown', 'object', 'type'],
        'newlines-between': 'always',
        'pathGroupsExcludedImportTypes': ['builtin'],
        'warnOnUnassignedImports': false,
      },
    ],
    'import/newline-after-import': 'off',
    /* react & next */
    'react/prop-types': 0,
    '@next/next/no-html-link-for-pages': 'off',
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'react/react-in-jsx-scope': 'off',
    // print functions
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
}
