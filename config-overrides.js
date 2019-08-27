const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);