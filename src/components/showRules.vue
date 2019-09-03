<template>
  <div class="showRules">
    <div class="rules">
      <h1>活动规则</h1>
      <div v-if="showRule">
        <p>1.中奖公布时间：5月12日下午5:30；</p>
        <p>2.中奖信息公布平台：艾慕官微（微信号：Aimu艾慕家居）</p>
        <p>3.免单名额：3名幸运客户</p>
        <p>4.门店将满足条件的客户信息录入抽奖系统，总部通过抽奖系统抽出幸运用户，并通过艾慕官微（微信号：Aimu艾慕家居）公布中奖结果；</p>
        <p>5.中奖客户由所在购买产品的门店通知并联系客户本人中奖情况，并需要在5月17日18:00前到门店填写《客户免单信息表》。未在规定时间内回传《客户免单信息表》的，视为自动放弃。放弃免单不做任何补偿，且免单不可替换，不可作为其他产品的抵扣款；</p>
        <p>6.如有疑问，请咨询门店导购；</p>
        <p>7.活动最终解释权归东莞荟萃家居有限公司所有。</p>
      </div>
      <div v-else>
        <p>1.活动期间关注慕思寝具服务号（微信号：derucci02），即可参与现金大转盘抽奖，获得相应电子现金券，凭借电子现金券可以到门店兑换实体现金券和使用;</p>
        <p>2.现金券使用时间：3月1日-3月24日；</p>
        <p>3.现金券类型：199元现金券/299元现金券/399元现金券/499元现金券；</p>
        <p>4.消费满5千元方可使用现金券，不可叠加使用，单笔订单仅可使用一张；</p>
        <p>5.现金券可当现金抵扣购买慕思门店所有正价产品，不适应本次321活动款产品，不兑现，不找赎；</p>
        <p>6.详情请咨询：400 777 0077。</p>
      </div>
    </div>
    <div class="close" >
      <div class="close_btn" @click="closeBtn"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['changVal', 'type'],
  data() {
    return {
      showRule: true
    }
  },
  mounted() {
    if(this.type === 'rotate') {
      this.showRule = false
    } 
  },
  methods: {
    closeBtn() {
      this.changVal(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.showRules {
  height: 100%;
  .rules {
    margin-left: 5vw;
    margin-top: 24vw;
    padding-bottom: 4.66vw;
    background: #fff;
    width: 90.66vw;
    background:rgba(239,239,244,1);
    box-shadow:0px 0.8vw 1.06vw 0px rgba(0, 0, 0, 0.2);
    border-radius:2.13vw;
    height: 60%;
    overflow: scroll;
    h1 {
      color: #333;
      font-size: 5.6vw;
      text-align: center;
      line-height: 14.33vw;
    }
    p {
      padding: 0 3.86vw;
      color: #363636;
      font-size: 3.73vw;
    }
  }
  .close {
    color: #fff;
    .close_btn {
      background: url(../assets/images/close.png) no-repeat center;
      background-size: 100% 100%;
      width: 10.66vw;
      height: 14.66vw;
      margin: -0.2vw auto;
    }
  }
}
</style>
