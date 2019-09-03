<template>
  <div class="coupon">
    <div class="content">
      <h1>中奖啦</h1>
      <p>恭喜您获得价值{{ prize }}元现金券一张，请根据中奖记</p>
      <p>录到门店进行兑换实体现金券及使用。</p>
      <img :src="`./static/img/${prize}.jpeg`" alt="">
      <!-- <img :src="`../../assets/images/${prize}.png`" alt=""> -->
    </div>
    <div class="close" >
      <div class="close_btn" @click="handleClick"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showCoupon', 'prize'],
  data() {
    return {
    }
  },
  methods: {
    handleClick() {
      this.showCoupon(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  box-sizing: border-box;
  padding:5vw 3.86vw ;
  width: 90.66vw;
  // height: 70.66vw;
  background: #fff;
  border-radius: 2.13vw;
  margin: 0 auto;
  margin-top: 55vw;
  text-align: center;
  h1 { 
    font-size: 6.02vw;
    font-weight: bold;
    color: #333;
  }
  p {
    color: #363636;
    text-align: left;
    font-size: 3.73vw;
  }
  img {
    width: 84vw;
    height: 36.53vw;
    margin-top: 2vw;
  }
}
.close {
  color: #fff;
  .close_btn {
    background: url(../../assets/images/close.png) no-repeat center;
    background-size: 100% 100%;
    width: 10.66vw;
    height: 14.66vw;
    margin: auto;
  }
}

</style>
