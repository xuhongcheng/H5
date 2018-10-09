const getters = { //相当于state的计算属性
  token: state => state.user.token,
  name: state => state.user.name,
  status: state => state.user.status,
  permission_routers: state => state.permission.routers, //总路由
}
export default getters
