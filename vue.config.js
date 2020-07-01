module.exports = {
  outputDir: 'docs',
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/the-process.html',
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
