<template>
    <div class="bar">
      <div class="bar_percent" :style="{width:list.timeList[list.isActive].percent}"></div>
      <div class="list">
            <div class="list_item" v-for="(item,index) in list.timeList" :key="index">           
                <p>{{item.date}}</p>
                <div @click="changeItem(index)">
                  <img src="../assets/images/in.png" alt="" v-if="list.isActive==index">
                  <img src="../assets/images/out.png" alt="" v-else>
                </div> 
                <p>{{item.time}}</p>
            </div>
      </div>
    </div>
   
</template>

<script>
import { mapState } from "vuex"
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel()
export default {
  name:'TimeBar',
  props:['list'],
  data () {
    return {
     
    }
  },
  created(){
    
  },
  computed:{
    ...mapState({
      drawTimeList:state=>state.lottery.timeBar.timeList,
      drawTimeIndex:state=>state.lottery.timeBar.isActive,
      seckillTimeList:state=>state.seckill.timeBar.timeList,
      seckillTimeIndex:state=>state.seckill.timeBar.isActive
    })
  },
  methods:{
   changeItem(index){
     if(this.$route.path=='/seckill'){
        this.$store.commit('seckill/setTimeBar', index)
        let date=this.seckillTimeList[this.seckillTimeIndex].datetime
        let type="321-2"
        console.log(date);
         indexModel.getPrizes(date,type).then(res=>{
           console.log("秒杀");
           console.log(res.data);
          if(res.data.length>0){
            this.$store.commit('seckill/setWinList',res.data)
          }else{
            this.$store.commit('seckill/showNone')
          }
        })
      }
      if(this.$route.path=='/draw'){
        this.$store.commit('lottery/setTimeBar', index)
        let date=this.drawTimeList[this.drawTimeIndex].datetime
        let type="321-2"
        console.log(date);
        indexModel.getPrizes(date,type).then(res=>{
          console.log("抽奖");
           console.log(res.data);
          if(res.data.length>0){
            this.$store.commit('lottery/setWinList',res.data)
            
          }else{
            this.$store.commit('lottery/showNone')
          }
        })
        
      } 
   }
  }
}
</script>

<style lang="scss" scoped>
.bar{
    width:100%;
    height:2px;
    background: #fff;
    position: relative;
    .bar_percent{
      width:37.5%;
      height:100%;
      position: absolute;
      top:0;
      left:0;
      background: #5FB0FF;
    }
    .list{
      position: absolute;
      top:0;
      left:0;
      transform: translate(0,-47%);
      width:100%;
      display: flex;
      flex-direction: row;
      align-items:center;
      justify-content: space-around;
      flex-wrap:nowrap;
      .list_item{
        text-align:center;
        p{
          font-size: .09rem;
          color:#fff;
        }
        img{
          width:.16rem;
          display: block;
          margin:0 auto;
        }
      }
}
    
    
  }

</style>
