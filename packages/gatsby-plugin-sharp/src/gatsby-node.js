exports.onPreInit = ({ actions, reporter }, pluginOptions) => {
  try {
    require(`sharp`)
  } catch (error) {
    // Bail early if sharp isn't available
    reporter.panic(
      reporter.stripIndent`
        The dependency "sharp" does not seem to have been built or installed correctly.

        - Try to reinstall packages and look for errors during installation
        - Consult "sharp" installation page at http://sharp.pixelplumbing.com/en/stable/install/
        
        If neither of the above work, please open an issue in https://github.com/gatsbyjs/gatsby/issues
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
