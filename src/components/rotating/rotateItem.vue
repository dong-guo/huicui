<template>
  <div class="rotateItem">
    <ul class="circle" 
    :style="{transform: 'rotate(' + rotate + 'deg)', transition: transition}">
      <li v-for="(item,index) in list" :key="index" :class="`${ item.side }`">
        <span class="award">{{ item.text }}</span>
      </li>
    </ul>
    <div class="control">
      <div class="wrapper"></div>
      <div class="point"></div>
      <div class="begin-wrapper" v-show="hasChance"></div>
      <div class="begin" v-if="hasChance"  @click="startBtn">开始</div>
      <div class="begined" v-else @click="startedBtn">开始</div>
    </div>
  </div>
</template>

<script>
import {IndexModel} from '../../utils/index'
const indexModel = new IndexModel()
import Vuex,{ mapMutations, mapState } from 'vuex'
import { getAngle, getRandom } from '../../utils/rotate'
export default {
  props: ['isStarted', 'isStart'],
  data() {
    return {
      list: [
        {side: 'left-top', text: '199元现金券'},
        {side: 'right-top', text: '299元现金券'},
        {side: 'left-bottom', text: '399元现金券'},
        {side: 'right-bottom', text: '499元现金券'}
      ],
      rotate:'',
      transition: '',
      key: true,
      hasChance: false
    }
  },
  computed: {
    ...mapState({
      typeCoupon: state => state.rotate.typeCoupon,
      isRotated: state => state.rotate.isRotated,
      unionId: state => state.rotate.unionId
    })
  },
  watch: {
    isRotated() {
      this.judgeRotate()
    }
  },
  created() {
     this.judgeRotate()
  },
  methods: {
    ...mapMutations(['setTypeCoupon']),
    judgeRotate() {
      if(!this.isRotated) {
        this.hasChance = false
      }else {
        this.hasChance = true
      }
    },
    //开始抽奖
    startBtn() {
      if(this.key) {
        this.key = false
        const angleArr = getAngle()
        const angle = getRandom(angleArr[0], angleArr[1])
        this.rotate = angle + 1800
        this.transition = '3s'
        this.saveRotateInfo(angleArr[2])
        this.setTypeCoupon(angleArr[2])
        setTimeout(() => {
          this.rotate = 0
          this.transition = '0s'
          this.hasChance = false
          this.isStart(false)
        }, 3200);
      }
      
    },
    //获取抽奖信息
    saveRotateInfo(type) {
      indexModel.rotateSaveInfo(this.unionId,type).then(res => {
        console.log(res)
      })
    },
    //已抽奖
    startedBtn() {
      this.isStarted(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.rotateItem {
  position: relative;
  z-index: 99;
  margin: 2vw auto;
  width: 77.73vw;
  height: 77.73vw;
  border: 1.64vw dotted rgba(137, 227, 250, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    span{
      color: #2a5680;
      font-size: 4.8vw;
      font-weight: bold;
    }
    .left-top {
      width: 36vw;
      height: 36vw;
      border-radius:36vw 0 0 0;
      background: #a1d1ff;
      .award {
        transform:rotate(-45deg);
        display: block;
        margin-top: 15vw;
      }
    }
    .right-top {
      width: 36vw;
      height: 36vw;
      border-radius:0 36vw 0 0;
      background: #55acff;
      .award {
        transform:rotate(45deg);
        display: block;
        margin-top: 15vw;
      }
    }
    .left-bottom {
      width: 36vw;
      height: 36vw;
      border-radius:0 0 0 36vw;
      background: #2a5680;
      .award {
        color: #a1d1ff;
        transform:rotate(-135deg);
        display: block;
        margin-top: 12vw;
      }
    }
    .right-bottom {
      width: 36vw;
      height: 36vw;
      border-radius:0 0 36vw 0;
      background: #a1d1ff;
      .award {
        transform:rotate(135deg);
        display: block;
        margin-top: 12vw;
      }
    }
  }
  .control {
    position: absolute;
    top: 50%;
    left: 50%;
    .wrapper {
      margin-top: -10.4vw;
      margin-left: -10.4vw;
      width: 20.8vw;
      height: 20.8vw;
      position: absolute;
      background:linear-gradient(0deg,rgba(202,229,255,1),rgba(114,184,255,1));
      box-shadow:0px 4px 6px 0px rgba(42,86,128,0.4);
      border-radius:50%;
    }
    .point {
      background: url(../../assets/images/point.png) no-repeat center;
      width: 19.7vw;
      height: 28vw;
      background-size: contain;
      position: absolute;
      margin-top: -18.12vw;
      margin-left: -9.84vw;
    }
    .begin-wrapper {
      width: 15.73vw;
      height: 15.73vw;
      position: absolute;
      margin-left: -7.865vw;
      margin-top: -7.865vw;
      background: url(../../assets/images/rotate-cicle.png) no-repeat center;
      background-size: 100% 100%;
      -webkit-animation: move .5s  linear infinite;
    }
    @keyframes move {
      0% {
        transform: scale(1)
      }
      50% {
        transform: scale(1.1)
      }
      100% {
        transform: scale(1);
      }
    }
    .begin {
      width: 13.06vw;
      height: 13.06vw;
      border-radius: 50%;
      background: #fff;
      position: absolute;
      margin-left: -6.53vw;
      margin-top: -6.53vw;
      text-align: center;
      line-height: 13.06vw;
      font-size: 4.8vw;
      font-weight: bold;
      color: #2a5680;
    }
    .begined {
      width: 13.06vw;
      height: 13.06vw;
      border-radius: 50%;
      background: #aabfd3;
      position: absolute;
      margin-left: -6.53vw;
      margin-top: -6.53vw;
      text-align: center;
      line-height: 13.06vw;
      font-size: 4.8vw;
      font-weight: bold;
      color: #2a5680;
    }
  }
  

}
</style>
