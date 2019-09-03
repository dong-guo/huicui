<template>
  <div class="wxpay">
    This page is wxpay.
    <button @click="wxpay">pay</button>
    <br/><br/>
    <button @click="test">alert</button>
    <br/>
    <button @click="getPaySign">get data</button>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from "js-md5"
export default {
  // components: { InputComp, Tips, RadioComp, SelectCity },
  data() {
    return {
      code: ''
    }
  },
  created() {
    this.getCode()
    console.log('code:', this.code)
  },
  mounted() {
    let date = new Date()
    let timestamp = date.getTime()
    console.log(this.getNonceStr(22), '时间戳：', timestamp, '5bd19d3a610caf93c01dc05462a42408'.toUpperCase())
    // this.get_client_ip()
  },
  methods: {
    test() {
      alert(typeof WeixinJSBridge)
    },
    wxpay(params) {
      if (typeof WeixinJSBridge == 'undefined'){
        if( document.addEventListener ){
            document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
        }else if (document.attachEvent){
            document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady); 
            document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
        }
      }else{
        this.onBridgeReady(params);
      }
    },
    onBridgeReady(params) {
      console.log('支付参数：', params)
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', params,
        // {
        //   "appId": "wx877a7e37b0de0a87",     //公众号名称，由商户传入     
        //   "timeStamp": Date.parse(new Date())/1000,         //时间戳，自1970年以来的秒数     
        //   "nonceStr": this.getNonceStr(32), //随机串
        //   "package":"prepay_id=wx271449596982287b08a8a1af0929366468",     
        //   "signType":"MD5",         //微信签名方式：
        //   "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
        // },
        function(res){
          if(res.err_msg == "get_brand_wcpay_request:ok" ){
          // 使用以上方式判断前端返回,微信团队郑重提示：
                //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
          } 
        }
      )
    },
    getNonceStr(n) {
      var chars =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      var res = "";
      for(var i = 0; i < n ; i ++) {
          var id = Math.ceil(Math.random()*n)
          res += chars[id]
      }
      return res
    },
    getPaySign() {
      this.getWxpayData().then((res) => {
        console.log('获取的参数：：', res)
        this.wxpay(res)
        let temp = this.objKeySort(res)
        delete temp['paySign']
        console.log('删除属性后：', temp)
        let signStr = (str = '') => {
          for (let key in temp) {
            str += `${key}=${temp[key]}&`
          }
          return str
        }
        let signStrTemp = `${signStr()}&key=dawma9c9taqsftgk3vfhbm4ul5m8sbk6`
        let paySign = md5(signStrTemp).toUpperCase()
        console.log('paysign:', paySign)
        // let params = Object.assign(temp, {paySign: paySign})
        // this.wxpay(params)
      })
    },
    // 对象根据属性排序
    objKeySort(obj) {
      var newkey = Object.keys(obj).sort();
  　　//先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
      var newObj = {};//创建一个新的对象，用于存放排好序的键值对
      for (var i = 0; i < newkey.length; i++) {//遍历newkey数组
        newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
      }
      return newObj;//返回排好序的新对象
    },
    getWxpayData() {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: 'https://derucci.net/wx/pushOrder',
          params: {
            tradeType: 'JSAPI',
            body: '321定金',
            detail: '321定金',
            amount: 0.01,
            sceneInfo: {
              "h5_info": {
                "type":"Wap",
                "wap_url": "https://derucci.net",
                "wap_name": "321定金"
              }
            },
            ip: '120.197.197.77',
            // ip: '223.104.63.246',
            callBack: 'https://derucci.net/wx/callback/pay',
            openId: 'ong6Cw4ONz3WDF-94R89i5qE6DLY'
          }
        }).then((res) => {
          if (res.status === 200) {
            resolve(res.data)
          } else {
            reject('下单失败！')
          }
        }).catch((error) => {
          reject('下单失败！')
        })
      })
    },
    getCode() {
      console.log(123)
      let url = location.href
      console.log(url)
      //重定向
      if(url.indexOf('code') === -1) {
        location.href = 'https://derucci.net/web/service/get-weixin-code.html?appid=wx877a7e37b0de0a87&scope=snsapi_base&state=parsm&redirect_uri='+url; 
      }
      // this.code = getQueryString('code')
    }
  }
}
</script>

<style lang="scss" scoped>
.wxpay {
  
}
</style>
