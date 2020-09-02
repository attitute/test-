import Vue from 'vue'
import vueRouter from 'vue-router'
import home from './pages/home.vue'
Vue.use(vueRouter)
const path = (path) => {
  return () => import(`@/pages${path}`);
}

// vueRouter.beforeEach((to, from, next) => {
//     next()
//   })
let routes = [{
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    alias: '/first',
    name: '首页',
    // 命名视图 匹配router-view中name等于a or b 默认显示home
    components: {
      default: home,
      a: path('/other'),
      b: home
    },
  },
  {
    path: '/word',
    name: 'word',
    component: path('/word'),
  },
  {
    path: '/other',
    name: 'other',
    props: true,
    component: path('/other'),
    children: [{
        path: 'child',
        name: 'child',
        component: path('/child/child'),
        children: [{
          path: '',
          redirect: 'test',
        }, {
          path: 'test',
          name: 'test',
          component: path('/child/child-son/test')
        }, {
          path: 'test1',
          name: 'test1',
          component: path('/child/child-son/test1')
        }]
      },
      {
        path: 'permission',
        name: 'permission',
        component: path('/child/permission')
      }
    ]
  },
]
const scrollBehavior = (to, from, savedPosition) => {
  // 滚动到上次滚动到的位置 通过浏览器的 (前进/后退 按钮触发) 时才可用
  if (savedPosition) return savedPosition
  console.log(to)
  console.log(from)
  const position = {}
  //  通过返回选择器滚动到锚点
  if (to.hash) {
    position.selector = to.hash

    // 指定元素的偏移量 
    if (to.hash === '#anchor2') {
      position.offset = {
        y: 100
      }
    }

    // 绕过＃数字 检查 匹配到有此元素
    if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
      return position
    }

    // 如果返回的位置是虚假的或空对象 将保留当前滚动的位置
    return false
  }
  // 异步的滚动
  // return new Promise(resolve => {
  //   // 检查是否有任何匹配的路由配置 具有需要滚动到顶部的元素
  //   if (to.matched.some(m => m.meta.scrollToTop)) {
  //     // 如果没有提供选择器，将使用coords
  //     // 或者选择器没有任何匹配的元素
  //     position.x = 0
  //     position.y = 0
  //   }

  //   // 等待输出转换完成（如有必要）
  //   this.app.$root.$once('triggerScroll', () => {
  //     // 如果返回的位置是虚假的或空对象 将保留当前滚动的位置
  //     resolve(position)
  //   })
  // })
}
export default new vueRouter({
  mode: "history",
  routes,
  scrollBehavior
})