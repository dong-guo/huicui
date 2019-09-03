
const state = {
  timeBar: {
    timeList: [
      {
        date: '3月9日',
        time: '15:00',
        percent: '12.5%',
        datetime: '2019-03-09 15'
      },
      {
        date: '3月9日',
        time: '17:00',
        percent: '37.5%',
        datetime: '2019-03-09 17'
      },
      {
        date: '3月10日',
        time: '15:00',
        percent: '62.5%',
        datetime: '2019-03-10 15'
      },
      {
        date: '3月10日',
        time: '17:00',
        percent: '100%',
        datetime: '2019-03-10 17'
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
      draw: true,
      seckill: false,
      drawRule: true,
      drawAward: true,
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
    state.list.diff.draw = true
    state.list.diff.seckill = false
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
