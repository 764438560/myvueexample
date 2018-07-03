<template>
  <div id="app">
    <Header :dd="sellers"></Header>
    <div class="tab">
      <div class="tabItem">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tabItem">
        <router-link to="/discuss">评论</router-link>
      </div>
      <div class="tabItem">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div>{{sellers}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      goods: [],
      discuss: [],
      sellers: { }
    }
  },
  mounted (){

    axios.get('/static/data.json').then((res) => {
      this.goods = res.data.goods;
      this.discuss = res.data.ratings;
      this.sellers = res.data.seller;
    })
  },
  components: {
    Header
  }
}
</script>

<style>
  a.router-link-active {
    color: #f06315;
  }
</style>
