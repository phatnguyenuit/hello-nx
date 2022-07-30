// Helper for combining webpack config objects
const { merge } = require('webpack-merge');

// References:
// Issue: https://github.com/nrwl/nx/issues/10163#issuecomment-1133644074
// Workaround: https://stackoverflow.com/questions/64294706/webpack5-automatic-publicpath-is-not-supported-in-this-browser/64715069#64715069
// Technique: https://nx.dev/guides/customize-webpack
module.exports = (config, context) => {
  return merge(config, {
    // overwrite values here
    output: {
      ...config.output,
      publicPath: '',
    },
  });
};
