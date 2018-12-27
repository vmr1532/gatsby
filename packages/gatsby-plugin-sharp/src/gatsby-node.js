exports.onPreInit = ({ actions, reporter }, pluginOptions) => {
  try {
    require(`sharp`)
  } catch (error) {
    // Bail early if sharp isn't working
    // TODO: Add link to docs
    reporter.panic(
      `
      "sharp" doesn't seem to have been built or installed correctly
      `
    )
  }

  const { setBoundActionCreators, setPluginOptions } = require(`./index`)

  setBoundActionCreators(actions)
  setPluginOptions(pluginOptions)
}

// TODO
// exports.formatJobMessage = jobs => {
// return {
// progress: 40,
// message: `3/4`,
// }
// }
