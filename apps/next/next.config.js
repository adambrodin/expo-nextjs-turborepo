/* eslint-disable @typescript-eslint/no-var-requires */
const { withExpo } = require('@expo/next-adapter');
const withPlugins = require('next-compose-plugins');
const findWorkspaceRoot = require('find-yarn-workspace-root');

const withTM = require('next-transpile-modules')([
  'expo-next-react-navigation',
]);

module.exports = withPlugins([
  withTM,
  [withExpo, { projectRoot: findWorkspaceRoot(__dirname) }],
]);
