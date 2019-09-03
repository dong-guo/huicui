<template>
  <div class="areaSelect" >
    <ul>
    <li class="pickerContainer" @touchmove="handleTouchmove" >
      <div @click="changeSelect" class="select">
        <span>{{ `${obj.province}` != 'undefined'? `${obj.province}  ${obj.city}  ${obj.area}` : '请选择城市'}} </span>
        <div class="pullDown" ></div>
      </div>
      <mt-popup
        lockScroll='true'
        style="width: 100vw"
        v-model="popupVisible"
        position="bottom">
        <mt-picker class="provincePicker"
        ref="areaPicker"
        :slots="provinceSlots" 
        @change="provinceChange">
        </mt-picker>
        <mt-picker class="cityPicker"
        ref="areaPicker"
        :slots="citySlots" 
        @change="cityChange">
        </mt-picker>
        <mt-picker class="areaPicker"
        ref="areaPicker"
        :slots="areaSlots" 
        @change="areaChange"></mt-picker>
      </mt-popup>
    </li>
    </ul>
  </div>
</template>

<script>
import {IndexModel} from '../utils/index'
const indexModel = new IndexModel()
import Vue from 'vue'
import { DatetimePicker, Picker, Popup } from 'mint-ui'
Vue.component(Picker.name, Picker)
Vue.component(Popup.name, Popup)
export default {
  data() {
    return {
      popupVisible:false,
      provinceSlots: [],
      citySlots:[],
      areaSlots:[],
      provinceArr:[],
      cityArr:[],
      areaArr:[],
      provinces:[],
      citys:[],
      areas:[],
      province: '',
      city: '',
      area: '',
      obj: {}
    }
  },
  props: ['getAreaData'],
  mounted() {
    this.getProvince()
  },
  // watch:{
  //   status() {
  //     if(this.status) {
  //       this.obj = {}
  //       this.citySlots = []
  //       this.areaSlots = []
  //       this.provinceSlots= []
  //       this.getProvince()
  //       this.getAreaData(this.obj)
  //     }
  //   }
  // },
  methods: {
    //阻止插件穿透滑动
    handleTouchmove(e) {
      e.preventDefault()
    },
    //省份改变
    provinceChange(picker, values) {
      this.province = values[0]
      this.getCity(this.getAreaCode(values[0], this.provinces))
      this.citySlots = []
      this.areaSlots = []
      this.city = ''
      this.area = ''
    },
    //城市改变
    cityChange(picker, values) {
      this.city = values[0]
      this.getArea(this.getAreaCode(values[0], this.citys))
      this.areaSlots = []
      this.area = ''
    },
    //地区改变
    areaChange(picker, values) {
      this.area = values[0]
       this.obj = {
        province: this.province,
        city: this.city,
        area: this.area
      }
      this.getAreaData(this.obj)
    },
    //弹出弹框
    changeSelect() {
      this.popupVisible = true
    },
    getProvince() {
      indexModel.getPro().then(res => {
        this.provinces = res.data
        this.provinceArr = this.getName(res.data)
        this.provinceArr.unshift('请选择省份')
         this.provinceSlots = [{
            values: this.provinceArr,
            className: 'provinceSlot'
          }]
      })
    },
    getCity(provinceCode) {
      indexModel.getCity(provinceCode).then(res => {
        this.citys = res.data
        if(this.citys.length == 0) {
          this.obj = {
            province: this.province,
            city: '',
            area: ''
          }
          this.getAreaData(this.obj)
        }
        this.cityArr = this.getName(res.data)
        this.cityArr.unshift('请选择城市')
          this.citySlots = [{
            values: this.cityArr,
            className: 'citySlot'
          }]
      })
    },
    getArea(cityCode){
      indexModel.getArea(cityCode).then(res => {
        this.areas = res.data
        this.areaArr = this.getName(res.data)
        if(this.areas.length == 0) {
          this.obj = {
            province: this.province,
            city: this.city,
            area: ''
          }
          this.getAreaData(this.obj)
        }
        this.areaArr.unshift('请选择地区')
        this.areaSlots =[{
          values: this.areaArr,
          className: 'areaSlot'
        }]
      })
    },
    //获得城市名字数组
    getName(arr) {
      let theArr = []
      arr.forEach(item => {
        theArr.push(item.name)
      })
      return theArr
    },
    //获得选中都城市code
    getAreaCode(str, arr) { 
      let index = -1
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name == str) {
          index = i
        }
      }
      if (arr[index]) {
        return arr[index].code
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
 .areaSelect{
    ul{
      width: 80vw;
    }
  
  }
  .pickerContainer{
    .mint-popup{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 60vw;
      // align-items: flex-start;
    }
  }
  .select {
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .pullDown {
      background: url(../assets/images/pulldown.png) no-repeat center;
      background-size: 100% 100%;
      width: 2.8vw;
      height: 2.8vw;
    }
  }
  .provincePicker {
    flex: 0.3;
  }
  .cityPicker{
    flex: 0.3;
  }
  .areaPicker {
    flex: 0.3;
  }

  .picker-item{
    font-size:3.38vw;
  }

</style>
