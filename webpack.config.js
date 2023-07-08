const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/pages', to: 'pages' },
        ],
        options: {
          transformPath(targetPath) {
            return targetPath.replace(/^public\//, '');
          },
        },
      })
    );
  }

  return config;
};