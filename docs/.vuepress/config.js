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
                  ['/components/my-swiper','Swiper 自适应轮播'],
                  ['/components/my-swiper-nav','NavBar 滚动导航条'],
                  ['/components/my-refresh','Refresh 下拉刷新'],
                  ['/components/my-upload','Upload 文件上传'],
                  ['/components/my-side-bar','SideBar 侧边栏'],
                  ['/components/my-nav-bar','NavBar 导航栏'],
                  ['/components/my-tab-bar','TabBar 底部导航栏'],
                  ['/components/my-drop-down','DropDown 下拉菜单栏'],
                  ['/components/my-time-picker','TimePick 时间选择器'],
                  ['/components/my-back-top','BackTop 回到顶部']
                ]
            },
        ],
        displayAllHeaders: true
    }
}