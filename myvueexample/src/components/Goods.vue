<template>
<div class="goodsListWrap">
  <div class="nav">
    <ul>
      <li v-for="(item, index ) in goodsList" :key="item.index">
        <p  class="itemTitle">{{item.name}}</p>
        <div class="goodsWrap" v-for="(its, i) in item.foods" :key="its.i">
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
              <spa>1</spa>
              <p class="min">-</p>
            </div>

          </div>
        </div>
      </li>
    </ul>

  </div>
  <p>
    <router-link to="/goods/goodsdetail">商品详情</router-link>
  </p>
  <router-view :type="goodsList"></router-view>
</div>
</template>

<script>
// import GoodsDedail from './GoodsDedail'
import GoodsListItems from '../components/GoodsListItem'
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
    GoodsListItems
  }
}
</script>

<style scoped>

</style>
