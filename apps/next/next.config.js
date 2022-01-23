// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withExpo } = require('@expo/next-adapter')

module.exports = withExpo({
  projectRoot: __dirname + '/../..',
})
