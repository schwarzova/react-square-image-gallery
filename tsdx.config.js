const postcss = require('rollup-plugin-postcss');
const cssnano = require('cssnano');

module.exports = {
  /**
   * @param {import('rollup/dist/rollup').InputOptions} config
   */
  rollup(config, options) {
    config.plugins.push(
      postcss({
        extensions: ['.css'],
        plugins: [cssnano()],
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: 'styles/style.css',
      })
    );
    return config;
  },
};
