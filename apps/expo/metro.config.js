/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require('expo/metro-config')
const findWorkspaceRoot = require('find-yarn-workspace-root')

const path = require('path')

const workspaceRoot = findWorkspaceRoot(__dirname)
const projectRoot = __dirname

const config = getDefaultConfig(projectRoot)

config.watchFolders = [workspaceRoot]
config.resolver.nodeModulesPath = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]

module.exports = config
