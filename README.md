<img src="https://github.com/zts117/vue-scaffold/blob/master/1.png" alt="Udemy Translate" height:='500' width="1400" />

配置px 转成 rem单位 适配移动端 
# vue-scaffold
vue脚手架
1. less使用 （减少css重复写 提高代码复用性）
2.+路由懒加载引入
3.config 下的index ： productionSourceMap： false 不生成map文件加快打包速度
4.config 下的index ： productionGzip： true （能优化打包后的文件大小）
    提示： 开启Gzip需要引入插件
    npm install --save-dev compression-webpack-plugin@1.1.11（建议加上版本号 用低版本 防止出现版本问题）
    
5.打包优化：CDN引入 （能优化打包后的文件大小）
    1）项目根目录下 index.html加入：
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
    <script src="https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script>

    2）webpack配置webpack.base.conf.js
    module.exports = {
        entry: {
          ....
        },
        externals: {
        // 要引入的资源的名字：该模块提供给外部引用的名字(由对应的库自定)
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        },
    }

    3）router/index.js文件下 直接使用配置好的VueRouter （tips: 脚手架中初始使用的为router  这里要改为VueRouter 原因看external那一步）
    // import Vue from 'vue'
    // import router from 'vue-router' // 这里才是引入的路由
     import HelloWorld from '@/components/HelloWorld'
     
     // Vue.use(VueRouter)
     // 在webpack 配置了VUE 和vueRouter 引入cdn优化打包大小 eslint-disable-line消除eslint警报提示
     export default new VueRouter({ // eslint-disable-line
       routes: [
         {
           path: '/',
           name: 'HelloWorld',
           component: HelloWorld
         }
       ]
     })
6. npm run build 打包后进入dist 
双击index 发现app*****.js（638 B）vender*****.js（805 B）

