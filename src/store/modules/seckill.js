
const state = {
  timeBar: {
    timeList: [
      {
        date: '3月9日',
        time: '18:00',
        percent: '25%',
        datetime: '2019-03-09 18'
      },
      {
        date: '3月10日',
        time: '18:00',
        percent: '100%',
        datetime: '2019-03-10 18'
      }
    ],
    isActive: 0
  },
  list: {
    tabItem: [
      {
        imgUrl: require('@/assets/images/list.png'),
        name: '中奖名单'
      },
      {
        imgUrl: require('@/assets/images/attention.png'),
        name: '抽奖规则'
      },
      {
        imgUrl: require('@/assets/images/gift.png'),
        name: '奖项设置'
      }
    ],
    isOn: 0,
    currentTab: 'List',
    contentTab: ['List', 'Rule', 'Award'],
    diff: {
      draw: false,
      seckill: true,
      drawRule: false,
      drawAward: false,
      winList: [],
      prizeList: []
    }
  }
}

const mutations = {
  setOn: (state, index) => {
    state.list.isOn = index
    state.list.currentTab = state.list.contentTab[index]
  },
  setTimeBar: (state, index) => {
    state.timeBar.isActive = index
  },
  showNone: (state) => {
    state.list.diff.draw = false
    state.list.diff.seckill = false
  },
  setWinList: (state, array) => {
    state.list.diff.winList = array
    state.list.diff.draw = false
    state.list.diff.seckill = true
  }
}

const actions = {

}

const getters = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
