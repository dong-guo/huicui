<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel()
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      indexModel.getAwardList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style >

</style>
