module.exports = {
  root: true,
  endOfLine: 'crlf',
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    // 'prettier/prettier': ['error', { endofLine: 'auto' }],
  },
}
