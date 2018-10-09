import Vue from 'vue'
import Router from 'vue-router'

// 解决build后keep-live不生效,路由懒加载
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'center',
	    component: _import('center')
    },
  ]
})
