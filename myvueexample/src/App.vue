<template>
  <div id="app">
    <div v-if="seller.supports != undefined">
      <Header :sellerInfo="seller"></Header>
    </div>
    <div class="tab">
      <div class="tabItem">
        <router-link :to="{path:'/goods', query:{goods:goods}}">商品</router-link>
      </div>
      <div class="tabItem">
        <router-link :to="{path:'/discuss', query:{discuss:discuss}}">评论</router-link>
      </div>
      <div class="tabItem">
        <router-link :to="{path:'/seller', query:{seller:seller}}">商家</router-link>
      </div>
    </div>
    <div v-if="seller.supports != undefined">
      <router-view :datas="datas"></router-view>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      datas:{},
      goods: [],
      discuss: [],
      seller: { }
    }
  },

  mounted (){
    axios.get('/static/data.json').then((res) => {
      this.datas=res.data;
      this.goods = res.data.goods;
      this.discuss = res.data.ratings;
      this.seller = res.data.seller;
    })
  },
  components: {
    Header
  }
}
import Header from './components/Header'
</script>

<style>
  a.router-link-active {
    background: #bdeeff;
    color: #fff;
    display: inline-block;
    width:100%;
    height:100%;
  }
</style>
