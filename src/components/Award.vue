<template>
    <div class="award">
      <div class="lottery_award" v-if="list.drawAward">
        <div class="item">
            <img src="../assets/images/phone.png" alt="">
            <div>
              <h2>华为 Mate 20 Pro</h2>
              <h1>12名</h1>
            </div>
        </div>
        <div class="item">
            <img src="../assets/images/pillow.png" alt="">
            <div>
              <h2>凝胶枕</h2>
              <h1>24名</h1>
            </div>
        </div>
        <div class="item">
            <img src="../assets/images/quilt.png" alt="">
            <div>
              <h2>芯逸桑蚕丝薄被</h2>
              <h1>40名</h1>
            </div>
        </div>
      </div>
      <div class="miaosha_award"  v-else>
        <div class="item">
            <h1>【秒杀床垫】</h1>
            <p class="sm">&nbsp;&nbsp;歌蒂娅 MCG1-001B</p>
            <p class="xm">&nbsp;&nbsp;零售价4018元</p>
            <div>
              <img src="../assets/images/mattress.png" alt="">
              <h1>40名</h1>
            </div>
        </div>
       
      </div>
     
    </div>  
</template>

<script>

export default {
  name:'award',
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
.award{
  width:92vw;
  margin:.15rem auto 0;
  .lottery_award{
    width:100%;
    margin-top:.275rem;
    .item{
      width:100%;
      height:28vw;
      border-radius:14vw;
      background: linear-gradient(to bottom,#266DAA,#268FA9);
      box-shadow:0px 10px 6px 0px rgba(1,10,19,0.5);
      display: flex;
      flex-direction: row;
      align-items:center;
      margin-bottom: 4vw;
      padding:0 9vw;
      box-sizing: border-box;
      img{
        width:28vw;
      }
    
      h2{
        font-size:.18rem;
        font-weight: bold;
        color:#fff;
        padding-left:.05rem;
      }
      h1{
        font-size:.3rem;
        font-weight: bold;
        color:#fff;
        text-align: right;
      }
      div{
        flex:1;
      }
    }
  }
  .miaosha_award{
     width:100%;
     margin-top:.275rem;
    .item{
      width:100%;
      height:40vw;
      border-radius:14vw;
      background: linear-gradient(to bottom,#266DAA,#268FA9);
      box-shadow:0px 10px 6px 0px rgba(1,10,19,0.5);
      margin-bottom:4vw;
      padding:0 9vw;
      box-sizing: border-box;
      
      h1{
        font-size:.22rem;
        font-weight: bold;
        color:#fff;
      }
      .sm{
        font-size:.16rem;
        font-weight: bold;
        color:#fff;
      }
      .xm{
        font-size:.13rem;
        color:#fff;
      }
      div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top:.05rem;
        img{
          width:51.46vw;
          height:17.06vw;
        }
        h1{
          font-size:.3rem;
          font-weight: bold;
          color:#fff;
        }
      }
    }
  }
}

</style>
