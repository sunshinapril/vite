<template>
<div id="layout">
  <a-layout>
    <a-layout-header>Vite有限公司</a-layout-header>
    <a-layout>
      <a-layout-sider>
        <side-nav></side-nav>
      </a-layout-sider>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</div>
</template>  
<script lang="ts">
import SideNav from './components/SideNav.vue';
export default {
  name: 'App',
  components: {
    SideNav
  }
}
</script>
<style lang="less" scoped>
#layout{
  height: 100%;
  .ant-layout {
    height: 100%;
    .ant-layout-header,.ant-layout-footer {
      height: 5%;
      background: #7dbcea;
      color: #fff;
    }
    .ant-layout-sider {
      height: 100%;
      width: 256px !important;
      max-width: 256px !important;
      flex: 0 0 256px !important;
      background: #ffffff;
      // background: #3ba0e9;
      color: #fff;
    }
    .ant-layout-content {
      height: 100%;
    }
  }
}
</style>