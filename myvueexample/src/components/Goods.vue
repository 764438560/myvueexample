<template>
<div class="goodsListWrap">
  <div class="nav">
    <ul>
      <li v-for="(item, index ) in goodsList" :key="item.index">
          <p  class="itemTitle">{{item.name}}</p>
          <div class="goodsWrap" v-for="(its, i) in item.foods" :key="its.i">

            <router-link :to="{path:'/goods/goodsdetail', query:{gInfos:its}}">
            <div class="itemLeft">
              <img width="100px" height="100px" :src="its.image" alt="">
            </div>
            <div class="itemCenter">
              <p class="name">{{its.name}}</p>
              <p class="info">{{its.info}}</p>
              <p class="price">￥{{its.price}}</p>
              <p class="sellCount">今日销量：{{its.sellCount}}</p>
            </div>
            <div class="itemRight">
              <div class="cartWrap">
                <p class="add">+</p>
                <span>1</span>
                <p class="min">-</p>
              </div>
            </div>
            </router-link>
            <div v-if="its.name !=  undefined">
              <router-view :its="1"></router-view>
            </div>
          </div>
      </li>
    </ul>
  </div>

</div>
</template>

<script>


export default {
  props:['datas'],
  data () {
    return {
      goodsList: []
    }
  },
  mounted () {
    this.goodsList = this.datas.goods
  },
  methods: {
  },
  components: {

  }
}
</script>

<style scoped>

</style>
