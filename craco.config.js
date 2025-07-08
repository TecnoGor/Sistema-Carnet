const { path } = require("pdfkit");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Elimina la restricción de importación fuera de /src
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        (plugin) => plugin.constructor.name !== "ModuleScopePlugin"
      );
      return webpackConfig;
    },
  },
};