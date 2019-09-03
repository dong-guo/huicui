import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 321客户录入
    {
      path: '/collect',
      name: 'index',
      component: resolve => require(['@/pages/index'], resolve)
    },
    {
      path: '/collectAimu',
      name: 'indexaimu',
      component: resolve => require(['@/pages/indexAimu'], resolve)
    },
    // 321拼团活动
    {
      path: '/pintuan',
      name: 'wholesale',
      component: resolve => require(['@/pages/wholesale'], resolve)
    },
    {
      path: '/pintuanAimu',
      name: 'wholesaleaimu',
      component: resolve => require(['@/pages/wholesaleaimu'], resolve)
    },
    // 321大转盘活动
    {
      path: '/',
      name: 'rotating',
      component: resolve => require(['@/pages/rotating'], resolve)
    },
    {
      path: '/draw',
      name: 'draw',
      component: resolve => require(['@/pages/lottery'], resolve)
    },
    {
      path: '/seckill',
      name: 'seckill',
      component: resolve => require(['@/pages/seckill'], resolve)
    },
    {
      path: '/wxpay',
      name: 'wxpay',
      component: resolve => require(['@/pages/wxpay'], resolve)
    },
    {
      path: '/H5pay',
      name: 'H5pay',
      component: resolve => require(['@/pages/H5pay'], resolve)
    }
  ]
})
