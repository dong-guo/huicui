<template>
  <div class="index">
    <div class="banner"></div>
    <div class="content">
      
      <div class="from_data">
        <p>{{ Title }}</p>
        <ul>
        <div class="title">
        <p>客户信息录入</p>  
      </div>
      <p class="text">请录入参与团购已成交的客户，与客户核实后录入，避免录入错误<p>
          <li class="selectCity">
            <select-city :getAreaData='getAreaData' />
          </li>
          <li v-for="(item, index) in text" :key='index'>
            <input-comp 
              v-model="list[index]" 
              :placeholderText='item.name'
              :maxLength='item.maxLength'
              :myType='item.type'/>
          </li>
        </ul>
        <button class="btn" @click="submitData"></button>
      </div>
    </div>
    <div class="footer"></div>
    <div class="showTips" v-show="isShowTips">
      <tips :tipsText='tipsText' :tipsPic='tipsPic'/>
    </div>
  </div>
</template>

<script>
import axios from 'axios' 
import {testPhone} from '../utils/common'
import {isNull} from '../utils/common'
import {checkTime} from '../utils/common'

import SelectCity from '../components/selectCity'
import InputComp from '../components/inputCompaimu';
import RadioComp from '../components/radioComp';
import Tips from '../components/tips';
// import index from '../store';
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel()
export default {
  components: { InputComp, Tips, RadioComp, SelectCity },
  data() {
    return {
      text: [
        {name: '请输入经销商姓名', type: 'text', maxLength:'20'},
        {name: '请输入门店名称', type: 'text', maxLength:'20'},
        {name: '请输入客户姓名', type: 'text', maxLength:'20'},
        {name: '请输入手机号码', type: 'number', maxLength:'11'}
      ],
      Title:'',
      title: [
        '请录入已到店支付预款2000元的客户，与客户核实后录入，避免录入错误。',
        '请录入参与抽奖和秒杀活动的客户信息。',
        '请录入参与秒杀活动的客户信息。'
      ],
      list:[],
      radioVal:'',
      tipsText: '录入成功',
      isShowTips: false,
      tipsPic: true,
      areaData: '',
      obj: {},
      key: true,
      status: false
    }
  },
  methods: {
    //提交表单
    submitData() {
      let isEndTime = checkTime()
      if(isEndTime == 'before') {
        // alert('该活动尚未开始')
        this.testPhoneVal()
      }else if(isEndTime == 'begin'){
        this.testPhoneVal()
      }else{
        alert('该活动已结束')
      }
    },
    saveData(obj) {
      this.key = false
      indexModel.saveData(obj).then(res => {
        if(res.data.status == 1) {
          this.showTips('录入成功')
          this.key = true
        }else {
          this.key = true
          this.showWarnTips(res.data.msg)
        }
      })
    },
    //获取城市信息
    getAreaData(val) {
      this.areaData = val
      // this.status = false
    },
    //单选框的值变化
    changeVal(val) {
      this.radioVal = val
      this.getTitle(val)
    },
    //判断地区选择
    checkAreaData() {
      let val = this.areaData
      if(val.province) {
        this.obj.city = val.city
        this.obj.province = val.province
        this.obj.shopName = this.list[0]
        this.obj.dealerName = this.list[1]
        this.obj.username = this.list[2]
        this.obj.prizeType = 'aimu321'
        let arr = Object.keys(this.obj);
        let len = arr.length;
        if(len >= 7) {
          if(this.key) {
            this.saveData(this.obj)
          }
        }
      }else {
        this.showWarnTips('请选择城市')
      }
    },
    //验证手机号码
    testPhoneVal() {
      let phone = this.list[3]
      if(testPhone(phone)) {
        this.obj.phone = phone
        this.testInputData()
      }else {
        this.showWarnTips('请输入正确手机号')
      }
    },
    //判断哪个输入框没填
    testInputData() {
      let len = this.list.length
      let time = 0
      for(var i = 0; i < len; i++) {
        if(this.list[i] == undefined || isNull(this.list[i]) == false) {
          this.checkInputData(i)
        }else {
          time += 1
        }
      }
      if(time == 4) {
        // if(this.radioVal === ''){
        //   this.showWarnTips('请选择订单类型')
        // }else {
          this.checkAreaData()
        // }
      }
    },
    //输入框没填写的错误提示
    showWarnTips(text) {
      this.tipsPic = false
      this.tipsText = text
      this.isShowTips = true
      setTimeout(() => {
        this.isShowTips = false
      }, 1500);
    },
    //成功提示
    showTips(text) {
      this.tipsPic = true
      this.tipsText = text
      this.isShowTips = true
      setTimeout(() => {
        this.isShowTips = false
        // this.$router.go(0)
        // this.list = []
        // this.status = true
        // this.radioVal = ''
        window.location.reload()
      }, 1000);
    },
    //判断是哪个输入框没填
    checkInputData(i) {
      if(i == 0) {
        this.showWarnTips('请输入门店名称')
        return
      }else if(i == 1) {
        this.showWarnTips('请输入经销商姓名')
        return
      }else if(i == 2) {
        this.showWarnTips('请输入客户姓名')
        return
      }
    },
    //判断单选框显示title
    getTitle(val) {
      if(val === '拼团') {
        this.Title = this.title[0]
        this.obj.prizeType = '321-1'
      }else if(val == '满20000元') {
        this.Title = this.title[1]
        this.obj.prizeType = '321-2'
        this.obj.field1 = 1
      }else if(val == '1000元定金') {
        this.Title = this.title[2]
        this.obj.prizeType = '321-2'
        this.obj.field1 = 2
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  min-height: 100vh;
  background: #061729;
  // background-color:rgba(155,215,209,1);
  .banner {
    background: url(../assets/images/banneraimu.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 50vw;
  }
  .content {
    width: 90.66vw;
    margin: 0 auto;
    p {
      font-size:3.8vw;
      color:#68B9FE;
    }
    .title {
      margin-top: 2.8vw;
      text-align: center;
      p {
        font-size: 4.8vw;
        font-weight:bold;
        color: rgba(10,65,56,1);
        line-height:2em;
        text-shadow:0 0.4vw 0.3vw rgba(255,255,255,1);
        -webkit-text-stroke:1px undefined;
        text-stroke:1px undefined;
        background:linear-gradient(0deg,rgba(155,215,209,1) 0%, rgba(236,245,254,1) 34.5703125%, rgba(101,177,255,1) 67.8955078125%, rgba(239,245,252,1) 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
      }
      img {
        width: 36.26vw;
        height: auto;
      }
    }
    .from_data {
      z-index: 999;
      position: relative;
      padding: 4.26vw 5.3vw;
      height:100vw;
      margin-top:60px;
      background:rgba(12,43,76,1);
      border-radius:3.2vw;
      .title p {
        height:11vw; 
        font-size: 5.73vw;
        color:rgba(101,177,255,1);
        line-height: 6.4vw;

      }
      p {
        font-size: 3.73vw;
        color:rgba(101,177,255,1);
        line-height: 6.4vw;
      }
      .selectCity {
        display: flex;
        align-items: center;
        font-size:4.26vw;
        height: 13.3vw;
        border-bottom: 1px solid #19589A;
        width: 100%;
        background:none;  
        outline:none;  
        color:  #68B9FE;
        // font-weight:bold;
        justify-content: space-between
      }
      .raidoCom {
        padding-right:6vw; 
      }
      .pullDown {
        background: url(../assets/images/pulldown.png) no-repeat center;
        background-size: 100% 100%;
        width: 2.8vw;
        height: 2.8vw;
      }
      .btn {
        background: url(../assets/images/btn.png) no-repeat center;
        background-size: 100% 100%;
        width: 46.93vw;
        height: 15.86vw;
        position: absolute;
        bottom: -20.86vw;
        left: 23.47vw;
      }
    }
  }
  .footer {
    // background: url(../assets/images/footer.png) no-repeat center;
    background-size: 100% 100%;
    width: 100%;
    height: 83.33vw;
    margin-top: -61vw;
    // position: fixed;
    // bottom: 0;
    // left: 0;
  }
  .showTips {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 999;
  }
}
</style>

