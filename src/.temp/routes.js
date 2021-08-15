const c1 = () => import(/* webpackChunkName: "page--src--pages--user--social--details--name-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/social/details/[name].vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--user--project--details--name-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/project/details/[name].vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--user--blog--edit--id-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/blog/edit/[id].vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--user--blog--details--id-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/blog/details/[id].vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--user--social--main-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/social/Main.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--user--readme--main-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/readme/Main.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--user--project--main-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/project/Main.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--user--new--main-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/new/Main.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--user--helper--main-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/helper/Main.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--user--configure--main-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/configure/Main.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--user--blog--main-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/blog/Main.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--user--blog--add-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/user/blog/Add.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--common--token-dialog-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/common/TokenDialog.vue")
const c14 = () => import(/* webpackChunkName: "page--src--pages--error--error404-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/error/Error404.vue")
const c15 = () => import(/* webpackChunkName: "page--src--pages--license-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/License.vue")
const c16 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/About.vue")
const c17 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/node_modules/gridsome/app/pages/404.vue")
const c18 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/Starry/Documents/EvangelineWong/workspace_2021/lagou/03-04-code/My-VBlog/src/pages/Index.vue")

export default [
  {
    name: "__user_social_details_name",
    path: "/user/social/details/:name",
    component: c1,
    meta: {
      dataPath: "/user/social/details/_name.json",
      dynamic: true
    }
  },
  {
    name: "__user_project_details_name",
    path: "/user/project/details/:name",
    component: c2,
    meta: {
      dataPath: "/user/project/details/_name.json",
      dynamic: true
    }
  },
  {
    name: "__user_blog_edit_id",
    path: "/user/blog/edit/:id",
    component: c3,
    meta: {
      dataPath: "/user/blog/edit/_id.json",
      dynamic: true
    }
  },
  {
    name: "__user_blog_details_id",
    path: "/user/blog/details/:id",
    component: c4,
    meta: {
      dataPath: "/user/blog/details/_id.json",
      dynamic: true
    }
  },
  {
    path: "/user/social/main/",
    component: c5
  },
  {
    path: "/user/readme/main/",
    component: c6
  },
  {
    path: "/user/project/main/",
    component: c7
  },
  {
    path: "/user/new/main/",
    component: c8
  },
  {
    path: "/user/helper/main/",
    component: c9
  },
  {
    path: "/user/configure/main/",
    component: c10
  },
  {
    path: "/user/blog/main/",
    component: c11
  },
  {
    path: "/user/blog/add/",
    component: c12
  },
  {
    path: "/common/token-dialog/",
    component: c13
  },
  {
    path: "/error/error404/",
    component: c14
  },
  {
    path: "/license/",
    component: c15
  },
  {
    path: "/about/",
    component: c16
  },
  {
    name: "404",
    path: "/404/",
    component: c17
  },
  {
    name: "home",
    path: "/",
    component: c18
  },
  {
    name: "*",
    path: "*",
    component: c17
  }
]
