const user = {
  state: {
    user: '',
    status: '',
    token: '',
    name: '',
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
  },

  actions: { // 通过操作mutations 间接操作state,优点是可异步操作，第一个参数为context对象
    // 登录
    /*Login(context, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password.trim()
      return new Promise((resolve, reject) => {
        login(username, password).then(response => {
          const data = response.data
          // 登陆成功之后把服务器token通过分发  SET_TOKEN事件 写到store中
          context.commit('SET_TOKEN', data.token)
          // 写到cookie中
          setToken(response.data.token)
          // if(data.)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },*/
  }
}

export default user
