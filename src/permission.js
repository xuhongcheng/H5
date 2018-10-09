/**
 * 权限控制，跳转路优时触发
 */
import NProgress from 'nprogress' // 网页加载进度条插件
import router from './router'
import 'nprogress/nprogress.css'
import {getToken} from './utils/auth.js'
NProgress.configure({
  showSpinner: true //禁用 进度环
})
//路由白名单
const whiteList = ['/login'] // 无需登陆的页面

// =================================================全局导航守卫,全局前置钩子=========================================================================

/**
 * next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，
 * 然后进行一个新的导航。你可以向 next 传递任意位置对象，
 * 且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
 */

router.beforeEach((to, from, next) => {
  NProgress.start() // start
  if ('s'){ // 如果登陆了

    /* 如果有token*/
    if (to.path === '/login') { // 如果去的是登录页
        next() //分解钩子
        NProgress.done() // end
    } else {
      NProgress.done()
      next()
    }
    next() //分解钩子
    NProgress.done() // end
  } else {
    /* 无token*/
    if (whiteList.indexOf(to.path) !== -1) { // 如果在在免登录白名单，直接进入
      next()
    } else {
      next('/') // 否则全部重定向到登录页
      NProgress.done() // end
    }
  }
})
// =================================================全局导航守卫,全局后置钩子=========================================================================
router.afterEach(() => { //全局后置钩子
  window.scrollTo(0,0)//跳转页面后回到页面顶部
  NProgress.done() // finish progress bar
})
