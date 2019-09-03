<template>
    <div class="">
     <ul class="tab" >
        <li v-for="(item,index) in list.tabItem" :key="index" :class="{'on':list.isOn==index}" @click="changeItem(index)">
          <img :src='item.imgUrl' alt="">
          <span>{{item.name}}</span>
        </li>
     </ul>
     <div class="content">
       <component :is="list.currentTab" :list="list.diff"></component>
     </div>
    </div>  
</template>

<script>
import List from "@/components/List"
import Rule from "@/components/Rule"
import Award from "@/components/Award"
export default {
  name:'Tab',
  props:['list'],
  data () {
    return {
      i:0
    }
  },
  components:{
    List,
    Rule,
    Award
  },
  created(){
   
  },
  methods:{
    changeItem(index){
      if(this.$route.path=='/seckill'){
        this.$store.commit('seckill/setOn', index);
      }
      if(this.$route.path=='/draw'){
        this.$store.commit('lottery/setOn', index);
      } 
    },
  }
}
</script>

<style lang="scss" scoped>
.tab{
  width:46.4vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  margin:.4rem auto 0;
  li{
    display: flex;
    width:.3rem;
    height:.3rem;
    align-items: center;
    justify-content: center;
    background:rgba(46,130,201,.4);
    border-radius:50%;
    transition: width .2s linear;
    overflow: hidden;
    img{
      width:.13rem;
      height:.13rem;
      display: block;
    }
    span{
      font-size: 0;
      color:#fff; 
    }
  }
  li.on{
    width:.84rem;
    background: #2E82C9;
    
    border-radius:.15rem;
    img{
      display: none;
    }
    span{
      font-size: .15rem;
    }
  }
  
}
 .content{
    position: relative;
    z-index: 10;
  }
</style>
