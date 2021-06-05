module.exports = {
    title: 'Speech Translation',
    description: 'Speech translation benchmarks, resources and advanced progress',
    themeConfig: {
        lastUpdated: 'Last Updated',
        repo: 'zhaocq-nlp/zhaocq-nlp.github.io',
        docsDir: 'docs',
        // editLinks: true,
        // editLinkText: 'Edit this page on GitHub',
        nav: [
            {text: 'Overview', link: '/docs/overview/'},
            {text: 'Benchmarks', link: '/docs/benchmarks/'},
            {text: 'Resources', link: '/docs/resources/'},
        ],
        sidebarDepth: 3,
        sidebar: {
            // '/docs/':[
            //     ''
            // ],
            '/docs/benchmarks/':[
                ''
            ],
            '/docs/resources/': [
                '',
                // 'front-matter',
                // 'palette'
            ],
        },
        smoothScroll: true,
    },
}