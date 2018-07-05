import Vue from 'vue'
import Router from 'vue-router'

// import Header from '../components/Header'
import Goods from '../components/Goods'
import Discuss from '../components/Discuss'
import Seller from '../components/Seller'
import GoodsDetail from  '../components/GoodsDedail'
// import GoodsListItem from '../components/GoodsListItem'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/goods'},
    // {path:'/',name:'header',component:Header},
    {path:'/goods',name:'goods',component:Goods},
    {path:'/discuss',name:'discuss',component:Discuss},
    {path:'/seller',name:'seller',component:Seller},
    {path:'/goods/goodsdetail',name:'goodsdetail',component:GoodsDetail},
    // {path:'/goods/goodslistitem',name:'goodslistitem',component:GoodsListItem}
  ]
})
