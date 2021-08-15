<template>
    <div>
        <el-card shadow="never">
            <el-menu :default-active="active" @select="onSelect">
                <el-menu-item v-for="item in constantRouterMap"
                              v-show="item.meta&&item.meta.type=='user'&&(token||!item.meta.LoginRequired)&&(!mini||!item.meta.mini)"
                              :key="item.path" :index="item.path">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>
            </el-menu>
        </el-card>

        <el-card shadow="never" style="margin-top: 20px;text-align: center">
            <div v-show="!token" style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                <el-tag type="danger" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token未绑定&nbsp;&nbsp;
                <el-button type="text" @click="openTokenDialog">绑定</el-button>
            </div>
            <div v-show="token" style="font-size: 0.9rem;line-height: 1.5;color: #303133;">
                <el-tag type="success" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token已绑定&nbsp;&nbsp;
                <el-button type="text" @click="cancellation">注销</el-button>
            </div>
            <div style="margin-top: 10px;text-align: left">
                <el-alert title="Token获取" type="info"
                          description="在 github-> settings-> developerSettings-> personalAccessTokens 勾选gist权限,获取Token. 详情参考README.md"
                          :closable="false">
                </el-alert>
            </div>
        </el-card>
        <token-dialog ref="tokenDialog"></token-dialog>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import TokenDialog from '../pages/common/TokenDialog'
    // import Error404 from '../pages/error/Error404'

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

    export default {
        name: 'Sidebar',
        components: {
            TokenDialog
        },
        data() {
            return {
                constantRouterMap: [
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
                        // redirect: '/user/blog/main',
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
                    }
                ],
                active: "",
                parentUrl: "",
                menuList: []
            }
        },
        computed: {
            ...mapGetters([
                'token',
                'githubUsername',
                'mini'
            ])
        },
        mounted() {
            let arr = this.$route.path.split("/")
            this.active = "/" + arr[1] + "/" + arr[2]
        },
        methods: {
            onSelect(index) {
                this.$router.push(index)
            },
            openTokenDialog() {
                this.$refs.tokenDialog.open(() => {

                })
            },
            cancellation() {
                this.$store.dispatch("Cancellation")
            }
        }
    }
</script>
