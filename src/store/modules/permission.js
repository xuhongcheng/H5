const permission = { //定义权限state
  state: {
    routers:'',
  },
  mutations: {
    SET_ROUTERS: (state, routers) => { //设置路由
      // state.addRouters = routers //通过权限获取的  待添加路由
      state.routers = routers //原有路由上拼接 待添加的路由 （新权限）
    }
  },
  actions:{
    ADD_ROUTE_MAP({ commit }, data) { //
      return new Promise(resolve => {
        commit('SET_ROUTERS',data)  //设置state中路由
        resolve()
      })
    }
  }
}

export default permission
