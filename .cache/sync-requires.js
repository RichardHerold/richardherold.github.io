const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/richardherold/Documents/GitHub/richardherold.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/richardherold/Documents/GitHub/richardherold.github.io/src/pages/404.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/Users/richardherold/Documents/GitHub/richardherold.github.io/src/pages/elements.js"))),
  "component---src-pages-generic-js": hot(preferDefault(require("/Users/richardherold/Documents/GitHub/richardherold.github.io/src/pages/generic.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/richardherold/Documents/GitHub/richardherold.github.io/src/pages/index.js"))),
  "component---src-pages-landing-js": hot(preferDefault(require("/Users/richardherold/Documents/GitHub/richardherold.github.io/src/pages/landing.js")))
}

