const state = {
  typeCoupon: '',
  isRotated: true,
  unionId: ''
}

const mutations = {
  setTypeCoupon: (state, arr) => state.typeCoupon = arr,
  setIsRotated: (state, arr) => state.isRotated = arr,
  setUnionId: (state, arr) => state.unionId = arr
}

const actions = {

}

const getters = {

}

export default {
  state,
  getters,
  actions,
  mutations
}