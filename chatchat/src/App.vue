<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import Login from './components/Login/Login'
export default {
  name:'app',
  components:{

  },
  created(){
    localStorage.addr = '未知';
    
  }

}
</script>

<style lang="less">
@import 'common/style/base';

#app {
  position: relative;
  width: 100%;
  height: 100%;
}

</style>
