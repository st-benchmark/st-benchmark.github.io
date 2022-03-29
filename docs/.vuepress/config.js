module.exports = {
    title: 'Speech Translation',
    description: 'Speech translation benchmarks, resources and advanced progress',
    themeConfig: {
        lastUpdated: 'Last Updated',
        repo: 'st-benchmark/st-benchmark.github.io',
        docsDir: 'docs',
        // editLinks: true,
        // editLinkText: 'Edit this page on GitHub',
        nav: [
            {text: 'Overview', link: '/overview/'},
            {text: 'Benchmarks', link: '/benchmarks/'},
            {text: 'Resources', link: '/resources/'},
        ],
        sidebarDepth: 3,
        sidebar: {
            // '/docs/':[
            //     ''
            // ],
            '/benchmarks/':[
                ''
            ],
            '/resources/': [
                '',
                'GigaST',
                // 'Datasets'
            ],
        },
        smoothScroll: true,
    },
}