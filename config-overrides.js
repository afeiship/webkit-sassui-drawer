const { resolve } = require('path');

const {
  override,
  addDecoratorsLegacy,
  addWebpackAlias
} = require('customize-cra');

const customizeOverride = () => (config) => {
  return config;
};

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': resolve(__dirname, 'src'),
    '#': resolve(__dirname, 'src/components'),
    components: resolve(__dirname, 'src/components'),
    environments: resolve(__dirname, 'src/environments'),
    assets: resolve(__dirname, 'src/assets'),
    images: resolve(__dirname, 'src/assets/images'),
    styles: resolve(__dirname, 'src/assets/styles'),
    views: resolve(__dirname, 'src/components/views'),
    interceptors: resolve(__dirname, 'src/components/interceptors'),
    services: resolve(__dirname, 'src/components/services'),
    mixins: resolve(__dirname, 'src/components/mixins'),
    modals: resolve(__dirname, 'src/components/modals')
  }),
  customizeOverride()
);
