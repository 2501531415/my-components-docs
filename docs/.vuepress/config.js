module.exports = {
    title: 'Hello My-components',
    description: 'welcome to my components',
    base: '/v1/components/',
    themeConfig: {
        nav: [
            { text: '接口定义', link: '/apiword' },
            { text: '接口字段定义', link: '/api' },
            { text: '附录：错误码', link: '/error' }
        ],
        sidebar:[
            ['/','快速安装'],
            ['/api','快速上手'],
            {
                title: '组件',   // 必要的
                collapsable: false,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                  ['/components/my-swiper','自适应轮播']
                ]
            },
        ],
        displayAllHeaders: true
    }
}