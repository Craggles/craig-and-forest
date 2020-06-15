module.exports = {
  outputDir: 'docs',
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/freddies-flowers',
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
