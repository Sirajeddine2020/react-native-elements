const path = require('path');

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(__dirname, '..');
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages, and in what order
config.resolver.nodeModulesPaths = [path.resolve(projectRoot, 'node_modules')];

config.projectRoot = projectRoot;

config.resolver.blacklistRE = [
  /website\/.*/,
  /coverage\/.*/,
  // /packages\/.*\/node_modules\/.*/,
];

module.exports = config;
