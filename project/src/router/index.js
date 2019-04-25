// import Vue from 'vue'
// import Router from 'vue-router'
// 测试
const Test = resolve => {
  import('@/pages/test').then(module => {
    resolve(module)
  })
}

// Vue.use(Router)

const routesPath = [
  { path: '/', name: 'Home', component: Test }
  // {path: '/home', name: 'Home', component: Home},
]

// 在webpack 配置了VUE 和vueRouter 引入cdn优化打包大小
export default new VueRouter({ // eslint-disable-line
  routes: routesPath
})
