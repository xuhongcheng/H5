<template>
  <div class="app-container">
    <h1>hello H5</h1>
  </div>
</template>

<script>
  export default {
    name:"center",
    data(){
      return{
      }
    },
    created(){
    },
    methods:{
      go(path,query){
        this.$router.push({'path':path,'query':query})
      },
    },
    components:{
    }
  }
</script>
<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import '../styles/mixin'
  @import '../styles/variable'
</style>
