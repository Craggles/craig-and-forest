module.exports = {
    outputDir: 'docs',
    pluginOptions: {
        prerenderSpa: {
            registry: undefined,
            renderRoutes: [
                '/',
                '/the-process.html',
                '/blog.html',
            ],
            useRenderEvent: true,
            headless: true,
            onlyProduction: true
        }
    }
}
