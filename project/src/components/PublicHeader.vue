<template>
  <div class="header">
    公共头部
  </div>
</template>

<script>
  export default {
    name: 'PublicHeader',
    props: {
      //      selectValue: {
      //        type: String,
      //        default: 'home'
      //      }
    },
    data () {
      return {
        //        tabs: [
        //          {title: '首页', value: 'home', toPage: 'Home'},
        //          {title: '我是商家', value: 'is_advertiser', toPage: 'IsAdvertiser'},
        //          {title: '我是用户', value: 'not_advertiser', toPage: 'NotAdvertiser'},
        //          {title: '招商代理', value: 'investment_agent', toPage: 'InvestmentAgent'},
        //          {title: '关于我们', value: 'about_us', toPage: 'AboutUs'}
        //        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/less" lang="less">
  @import "../assets/less/app.less";
  //全局样式
  .header {
    margin: 0 auto;
    width: 100%;
    position: relative;
    background-color: indianred;
    vertical-align: top;
  }
</style>
