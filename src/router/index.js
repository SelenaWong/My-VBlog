import Vue from 'vue'
import Router from 'vue-router'
import Error404 from '../pages/error/Error404'

import NewMain from '../pages/user/new/Main'
import SocialMain from '../pages/user/social/Main'
import SocialDetails from '../pages/user/social/details/[name]'
import BlogMain from '../pages/user/blog/Main'
import BlogAdd from '../pages/user/blog/Add'
import BlogEdit from '../pages/user/blog/edit/[id]'
import BlogDetails from '../pages/user/blog/details/[id]'
import ProjectMain from '../pages/user/project/Main'
import ProjectDetails from '../pages/user/project/details/[name]'
import ReadmeMain from '../pages/user/readme/Main'
import ConfigureMain from '../pages/user/configure/Main'
import HelperMain from '../pages/user/helper/Main'

// import MobileLayout from '@/mobile_views/layout/Layout'
// import MobileBlogMain from '@/mobile_views/blog/Main'
// import MobileBlogDetails from '@/mobile_views/blog/Details'
// import MobileProjectMain from '@/mobile_views/project/Main'
// import MobileProjectDetails from '@/mobile_views/project/Details'
// import MobileSelfMain from '@/mobile_views/self/Main'



Vue.use(Router)

export const constantRouterMap = [

    {
        path: '/user/new/main',
        component: NewMain,
        meta: {
            type: "user",
            icon: 'el-icon-star-off',
            title: '最新动态'
        }
    },
    {
        path: '/user/social/main',
        component: SocialMain,
        meta: {
            type: "user",
            icon: 'el-icon-mobile-phone',
            title: '社交圈'
        },
        children: [
            {
                path: '/user/social/main',
                component: SocialMain,
                meta: {title: '社交圈'}
            },
            {
                path: '/user/social/details/:name',
                component: SocialDetails,
                meta: {title: '用户资料'}
            }
        ]
    },
    {
        path: '/user/blog/main',
        redirect: '/user/blog/main',
        component: BlogMain,
        meta: {
            type: "user",
            icon: 'el-icon-edit-outline',
            title: '博客列表'
        },
        children: [
            {
                path: '/user/blog/main',
                component: BlogMain,
                meta: {title: '博客列表'}
            },
            {
                path: '/user/blog/add',
                component: BlogAdd,
                meta: {title: '发表博客'}
            },
            {
                path: '/user/blog/edit/:id',
                component: BlogEdit,
                meta: {title: '编辑博客'}
            },
            {
                path: 'details/:id',
                component: BlogDetails,
                meta: {title: '博客详情'}
            }
        ]
    },
    {
        path: '/user/project/main',
        component: ProjectMain,
        meta: {
            type: "user",
            icon: 'el-icon-service',
            title: '开源项目'
        },
        children: [
            {
                path: '/user/project/main',
                component: ProjectMain,
                meta: {title: '项目列表'}
            },
            {
                path: '/user/project/details/:name',
                component: ProjectDetails,
                meta: {title: '项目详情'}
            }
        ]
    },
    {
        path: '/user/helper/main',
        // redirect: '/user/helper/main',
        component: HelperMain,
        meta: {
            type: "user",
            icon: 'el-icon-printer',
            title: '使用帮助',
            mini: true
        }
    },
    {
        path: '/user/readme/main',
        // redirect: '/user/readme/main',
        component: ReadmeMain,
        meta: {
            type: "user",
            icon: 'el-icon-document',
            title: 'README.md'
        }
    },
    {
        path: '/user/configure/main',
        component: ConfigureMain,
        meta: {
            type: "user",
            icon: 'el-icon-setting',
            title: '系统配置',
            LoginRequired: true
        }
    },


    {
        path: "/404",
        component: Error404
    },
    {
        path: '/',
        redirect: '/user/new',
    },
    {
        path: "*",
        redirect: "/404"
    },

    //mobile
    // {
    //     path: '/mobile/user/blog',
    //     redirect: '/mobile/user/blog/main',
    //     component: MobileLayout,
    //     meta: {
    //         type: "mobile",
    //         icon: 'edit',
    //         title: '博客'
    //     },
    //     children: [
    //         {
    //             path: 'main',
    //             component: MobileBlogMain,
    //             meta: {
    //                 scrollTop: true
    //             }
    //         },
    //         {
    //             path: 'details/:id',
    //             component: MobileBlogDetails,
    //             meta: {
    //                 scrollTop: true
    //             }
    //         }
    //     ]
    //
    // },
    // {
    //     path: '/mobile/user/project',
    //     redirect: '/mobile/user/project/main',
    //     component: MobileLayout,
    //     meta: {
    //         type: "mobile",
    //         icon: 'like-o',
    //         title: '项目'
    //     },
    //     children: [
    //         {
    //             path: 'main',
    //             component: MobileProjectMain,
    //             meta: {
    //                 scrollTop: true
    //             }
    //         },
    //         {
    //             path: 'details/:name',
    //             component: MobileProjectDetails,
    //             meta: {
    //                 scrollTop: true
    //             }
    //         }
    //     ]
    //
    // },
    // {
    //     path: '/mobile/user/self',
    //     redirect: '/mobile/user/self/main',
    //     component: MobileLayout,
    //     meta: {
    //         type: "mobile",
    //         icon: 'contact',
    //         title: '个人'
    //     },
    //     children: [
    //         {
    //             path: 'main',
    //             component: MobileSelfMain,
    //             meta: {
    //                 scrollTop: true
    //             }
    //         }
    //     ]
    //
    // },
]


const router = new Router({
    routes: constantRouterMap,
    scrollBehavior(to, from, savedPosition) {
        if (to.meta.scrollTop) {
            return {x: 0, y: 0}
        }
    }
})
//
router.beforeEach((to, from, next) => {
    // Vue.prototype.$setTitle(to.meta.title)
    next()
})
//
//
export default router
