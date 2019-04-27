import Vue from 'vue'
import Router from 'vue-router'
// 测试
const Test = resolve => {
  import('@/pages/test').then(module => {
    resolve(module)
  })
}

Vue.use(Router)

const routesPath = [
  { path: '/', name: 'Home', component: Test }
  // {path: '/home', name: 'Home', component: Home},
]

export default new Router({
  routes: routesPath
})
