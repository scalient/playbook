/*
 * Important: We disable the postcss-minify-selectors optimization to prevent pseudoelements syntax of the form `::`
 * from being overzealously minified to `:`. This is essential for proper Paged.js operation (see
 * `https://gitlab.pagedmedia.org/tools/pagedjs/blob/e84d6af/src/modules/generated-content/target-counters.js#L81`).
 */

const defaultPreset = require("cssnano-preset-default");

module.exports = defaultPreset({
  minifySelectors: false,
});
