import Vue from 'vue'
import Router from 'vue-router'

import Goods from '../components/Goods'
import Discuss from '../components/Discuss'
import Seller from '../components/Seller'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/goods'},
    {path:'/goods',name:'goods',component:Goods},
    {path:'/discuss',name:'discuss',component:Discuss},
    {path:'/seller',name:'seller',component:Seller}
  ]
})
