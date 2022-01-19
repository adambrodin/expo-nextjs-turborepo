module.exports = {
  extends: ['next', 'prettier'],
  settings: {
    next: {
      rootDir: ['apps/next/'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
}
