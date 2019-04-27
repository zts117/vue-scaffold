<template>
  <div class="test">
    <public-header></public-header>
    测试测试
    <div style="padding: 0 18px">
      <!-- <img style="width: 100%;height: 200px;" src="assets/images/flowers.jpg" alt=""> -->
      <img style="width: 100%;" src="@/assets/images/flowers.jpg" alt="flowers">
    </div>
    <public-footer></public-footer>
  </div>
</template>

<script>
  import PublicHeader from '@/components/PublicHeader'
  import PublicFooter from '@/components/PublicFooter'
  export default {
    name: 'test',
    components: {
      PublicHeader,
      PublicFooter
    },
    data() {
      return {
        items: []
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  rel="stylesheet/less" lang="less">
  @import "../assets/less/app.less";
  .test {
    width: 100%;
    height: 100%;
    background-color: @page_bg;
  }
</style>
