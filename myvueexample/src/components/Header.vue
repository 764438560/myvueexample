<template>
  <div class="headerContainer">
    <div class="contentWrap">
      <div class="avatar">
        <img width="64" height="64" :src="sellerInfo.avatar">
      </div>
      <div class="centerContent">
        <div class="title">
          <div class="brand"></div>
          <span class="sellerName">{{sellerInfo.name}}</span>
        </div>
        <div class="description">
          {{sellerInfo.description}} / {{sellerInfo.deliveryTime}}分钟送达
        </div>
        <div class="delivery">
          <span class="playBrand"></span>
          <span class="playName" v-if="sellerInfo.supports != undefined">{{sellerInfo.supports[0].description}}</span>
        </div>
      </div>
      <div class="count">
        <span class="supportCounts" v-if="sellerInfo.supports != undefined">{{sellerInfo.supports.length}} 个</span>
        <i class="arrowRight"></i>
      </div>
      <div class="bgimg">
        <img width="100%" height="100%" :src="sellerInfo.avatar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sellerInfo'],
  mounted (){
    // console.log(2,this.sellerInfo)
  }
}
</script>

<style scoped>

</style>
