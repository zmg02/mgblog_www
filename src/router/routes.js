export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        component: () => import('@/views/Login'),
        meta: {
            isShowFooter: true,
            title: '登录'
        }
    },
    {
        path: '/register',
        component: () => import('@/views/Register'),
        meta: {
            isShowFooter: true,
            title: '注册'
        }
    },
    {
        path: '/home',
        component: () => import('@/views/Home'),
        meta: {
            isShowFooter: true,
            title: '首页'
        }
    },
    {
        path: '/blog',
        component: () => import('@/views/Blog'),
        meta: {
            isShowFooter: true,
            title: '博客'
        },
        children: [
            {
                path: 'grid',
                component: () => import('@/views/Blog/Grid'),
                meta: {
                    isShowFooter: true,
                    title: '博客-网格'
                },
            },
            {
                path: 'masonry',
                component: () => import('@/views/Blog/Masonry'),
                meta: {
                    isShowFooter: true,
                    title: '博客-瀑布'
                }
            },
            // /blog路由跳转到/blog/grid
            {
                path: '',
                redirect: 'grid',
            }
        ]
    },
    {
        path: '/posts',
        component: () => import('@/views/Posts'),
        meta: {
            isShowFooter: true,
            title: '帖子'
        },
        children: [
            {
                path: 'default',
                component: () => import('@/views/Posts/RightSidebar'),
                meta: {
                    isShowFooter: true,
                    title: '默认帖子样式'
                },
            },
            {
                path: 'left-sidebar',
                component: () => import('@/views/Posts/LeftSidebar'),
                meta: {
                    isShowFooter: true,
                    title: '左侧边栏帖子'
                },
            },
            {
                path: 'no-sidebar',
                component: () => import('@/views/Posts/NoSidebar'),
                meta: {
                    isShowFooter: true,
                    title: '无侧边栏帖子'
                },
            },
            {
                path: '',
                redirect: 'default'
            }
        ]
    },
    {
        path: '/about',
        component: () => import('@/views/About'),
        meta: {
            isShowFooter: true,
            title: '关于我们'
        }
    },
    {
        path: '/contact',
        component: () => import('@/views/Contact'),
        meta: {
            isShowFooter: true,
            title: '联系我们'
        }
    },
    {
        path: '/404',
        component: () => import('@/views/404.vue'),
    },

];