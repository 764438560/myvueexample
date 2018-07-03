<template>
<div class="headerContainer">
  <div class="contentWrap">
    <div class="avatar">
      <!--<img width="64" height="64" src="sellerInfo.avatar">-->
    </div>
    <div class="centerContent">
      <div class="title">
        <div class="brand"></div>
        <span class="sellerName">粥品香坊（回龙观）</span>
      </div>
      <div class="description">
        蜂鸟专送 / 38分钟送达
      </div>
      <div class="delivery">
        <span class="playBrand"></span>
        <span class="playName">粥品香坊（回龙观）</span>
      </div>
    </div>
    <div class="count">
      <span class="supportCounts">5个</span>
      <i class="arrowRight"></i>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['dd'],
  mounted (){
    console.log(222,this.dd)
  }
}
</script>

<style scoped>

</style>
