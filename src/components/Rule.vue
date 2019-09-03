<template>
    <div class="rule">
      <div class="lottery_rule" v-if="list.drawRule">
        <p>1、参与方式：3月1日至活动当天消费满20000元；</p>
        <p>2、中奖名单分4个时段抽取，抽取安排如下：</p>
        <div><img src="../assets/images/table.png" alt=""></div>
        <p>3、查询方式：查询慕思官方微信服务号（微信号：derucci02），亦可在公众号内检索“321活动”查询中奖情况；</p>
        <p>4、中奖客户：专门的客服会与中奖客户联系，核实信息后寄出产品；</p>
        <p>5、放弃奖品不做任何补偿，且获奖奖品不可替换，不可作为其他产品的抵扣款；</p>
        <p>6、如有疑问可以拨打客服热线：400-777-0077；</p>
        <p>7、活动最终解释权归慕思寝室用品有限公司所有。</p>
      </div>
      <div class="miaosha_rule" v-else>
        <p>1、参与方式(满足其中一种方式即可）：</p>
        <p>A.消费满额：3月1日至活动当天消费满20000元</p>
        <p>B.缴纳定金：到当地慕思门店缴纳1000元秒杀定金</p>
        <p>2、秒杀指定款产品：MCG1-001B歌蒂娅床垫；</p>
        <p>3、3月9日-10日18：00抽取46张价值4018元的歌蒂娅MCG1-001B床垫；</p>
        <p>4、秒杀床垫分2个时段抽取，抽取安排如下：</p>
        <p class="color">3月9日&nbsp;&nbsp;&nbsp;&nbsp;18:00&nbsp;&nbsp;秒杀数量&nbsp;&nbsp;20张</p>
        <p class="color">3月10日&nbsp;&nbsp;18:00&nbsp;&nbsp;秒杀数量&nbsp;&nbsp;26张</p>
        <p>5、秒杀成功：专门的客服会与秒杀客户联系，核实信息后寄出产品，且1000元定金可用于购买其他产品（订单总额不小于1000元，否则差额不退回。）</p>
        <p>6、秒杀失败：定金将不退回，但定金可作为其他产品的抵扣款使用；</p>
        <p>7、秒杀产品不可替换或加价替换成其他产品，亦不可折算成现金，放弃不作任何补偿；</p>
        <p>8、如有疑问可以拨打客服热线：400-777-0077；</p>
        <p>9、活动最终解释权归慕思寝室用品有限公司所有。 </p>
      </div>
    </div>  
</template>

<script>

export default {
  name:'rule',
  props:['list'],
  data () {
    return {
     
    }
  },
  created(){
    
  },
  methods:{
   
  }
}
</script>

<style lang="scss" scoped>
.rule{
  font-size: .12rem;
  color:#2E82C9;
  margin:.15rem auto;
  
  .lottery_rule{
    width:89.33vw;
    margin:0 auto;
    p{
      line-height: .22rem;
    }
    img{
      width:100%;
    }
  }
  .miaosha_rule{
    width:89.33vw;
    margin:0 auto;
    p{
      line-height: .22rem;
    }
    .color{
      color:#3F9DC5;
    }
  }
  
}

</style>
