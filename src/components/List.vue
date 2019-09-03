<template>
    <div class="box">
      <div class="lottery_table" v-if="list.draw">
        <div class="th">
          <div>姓名</div>
          <div>手机号</div>
          <div>奖品</div>
        </div>
        <div class="td" v-for="(item,index) in list.winList" :key="index">
          <div>{{item.username.substring(0,1)+"*"+item.username.substring(2)}}</div>
          <div>{{item.phone.substring(0,3)+"****"+item.phone.substring(7)}}</div>
          <div>{{item.prizeName}}</div>
        </div>
      </div>
      <div class="miaosha_table" v-else-if="list.seckill">
        <div class="th">
          <div>姓名</div>
          <div>手机号</div>
        </div>
        <div class="td" v-for="(item,index) in list.winList" :key="index">
          <div>{{item.username.substring(0,1)+"*"+item.username.substring(2)}}</div>
          <div>{{item.phone.substring(0,3)+"****"+item.phone.substring(7)}}</div>
        </div>
       
      </div>
      <div class="nothing" v-else>
        <div class="th">
          <div>姓名</div>
          <div>手机号</div>
          <div>奖品</div>
        </div>
        <h1>活动尚未开始</h1>
      </div>
    </div>  
</template>

<script>

export default {
  name:'list',
  props:['list'],
  data () {
    return {
    }
  },
  computed:{

  },
  created(){
    console.log(this.list)
  },
  mounted(){
   
  },
  methods:{
   
  }
}
</script>

<style lang="scss" scoped>
  .box{
    width:94.66vw; 
    margin:.15rem auto;
    font-size:.12rem;
    border: 1px solid #113F6F;
    border-radius: .04rem;
    box-shadow:0px 6px 6px 0px rgba(9,14,21,0.4); 
    background:#113F6F;
    padding-bottom:.1rem;
    .th{
      overflow:hidden;
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content: space-between;
      width:100%;
      height:10.66vw;
      background:linear-gradient(to bottom,rgba(0,129,220,.1),rgba(0,129,220,.9)),url("../assets/images/xuan.png") no-repeat;
      background-size: 100% 100%;
      filter:alpha(Opacity=50);
      color:#B3E8FF;
      padding:0 .15rem;
      box-sizing: border-box;
      :nth-child(1){
        flex:0 0 28%;
      }
      :nth-child(2){
        flex:0 0 28%;
        text-align: center;
      }
      :nth-child(3){
        flex:0 0 40%;
      }
    }
    .td{
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content: space-between;
      width:100%;
      height:6.4vw;
      padding:0 .15rem;
      color:#3F9DC5;
      box-sizing: border-box;
      :nth-child(1){
        flex:0 0 28%;
      }
      :nth-child(2){
        flex:0 0 28%;
        text-align: center;
      }
      :nth-child(3){
        flex:0 0 40%;
      }
    }
    .td:nth-child(2n+1){
      background:#214B8F; 
    }
    .miaosha_table{
      .th{
        :nth-child(1){
          flex:0 0 50%;
        }
        :nth-child(2){
          flex:0 0 50%;
          text-align: left;
        }
      }
      .td{
        :nth-child(1){
          flex:0 0 50%;
        }
        :nth-child(2){
          flex:0 0 50%;
          text-align: left;
        }
      }
    }
    .nothing{
      text-align: center;
      height:70vw;
      line-height:50vw;
      h1{
        font-size:.3rem;
        color:#2E82C9;
      }
    }
  }

</style>
