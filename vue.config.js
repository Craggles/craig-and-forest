module.exports = {
  outputDir: 'docs',
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/freddies-flowers.html',
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
