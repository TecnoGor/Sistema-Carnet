const { path } = require("pdfkit");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.devtool = false;
      // Elimina la restricción de importación fuera de /src
      webpackConfig.plugins.forEach(plugin => {
        if (plugin.definitions && plugin.definitions['process.env']) {
          plugin.definitions['process.env.NODE_ENV'] = JSON.stringify('production');
          delete plugin.definitions['process.env'].NODE_ENV; // Elimina duplicados
        }
      });
      webpackConfig.stats = {
        children: false,
        warningsFilter: [/Conflicting values for 'process.env.NODE_ENV'/]
      };
      webpackConfig.module.rules = webpackConfig.module.rules.filter(
        (rule) => !rule.loader?.includes('source-map-loader')
      );
      webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
        (plugin) => plugin.constructor.name !== "ModuleScopePlugin"
      );
      return webpackConfig;
    },
  },
};