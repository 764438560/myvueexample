<template>
    <div class="goodsDetailContainer">
        <div class="carousel"></div>
        <div class="arrowLeave" @click="goback"></div>
    </div>
</template>
<script>
export default {
  methods: {
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>
<style>

</style>
