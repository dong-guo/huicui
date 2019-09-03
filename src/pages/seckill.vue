<template>
  <div class="seckill">
    <div class="banner"></div>
    <time-bar :list="secList"/>
    <tab :list="secLink"/>
    <div class="footer"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel()
import TimeBar from "@/components/TimeBar"
import Tab from "@/components/Tab"
export default {
  name: 'seckill',
  data () {
    return {
    }
  },
  computed:{
    ...mapState({
      secList:state=>state.seckill.timeBar,
      secLink:state=>state.seckill.list,
    })
  },
  components: {
    TimeBar,
    Tab,
  },
  created() {
    let date='2019-03-09 18';
    let type='321-2';
    indexModel.getPrizes(date,type).then(res=>{
      console.log(res);
      if(res.data.length==0){
        this.$store.commit('seckill/showNone');
      }else{
         this.$store.commit('seckill/setWinList',res.data);
      }
    })
  },
  methods: {
   
  },
  beforeRouteEnter(to,from,next){
    console.log(to.path);
    next();
  }
}
</script>

<style lang="scss" scoped>
.seckill{
  width: 100vw;
  height: 100vh;
  position:relative;
  overflow-y:scroll;
  background-color: rgba(6, 23, 41, 1);
  .banner {
    background: url(../assets/images/banner_ms.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 50vw;
  }
  .footer {
    background: url(../assets/images/footer.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 83.33vw;
    position: fixed;
    bottom: 0;
    left: 0;
    pointer-events:none;
  }
}

</style>

