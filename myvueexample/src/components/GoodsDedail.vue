<template>
    <div class="goodsDetailContainer">
        <div class="carousel">
          <img width="100%"  height="100%" :src="gDetails.image" >
        </div>
        <div class="arrowLeave" @click="goback"></div>
        <p class="name">{{gDetails.name}}</p>
        <p class="info">{{gDetails.info}}</p>
        <p class="price">￥{{gDetails.price}}</p>
        <p class="sellCount">今日销量：{{gDetails.sellCount}}</p>
    </div>

</template>
<script>
export default {
  props: ['its'],
  data () {
    return {
      gDetails:{}
    }
  },
  mounted () {
    this.gDetails = this.$route.query.gInfos

  },
  methods: {
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>
<style>

</style>
