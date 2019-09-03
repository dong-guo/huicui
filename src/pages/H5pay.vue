<template>
  <div class="wxpay">
    This page is H5pay.
    <br/><br/>
    <a :href="payUrl">H5pay</a>
    <br/><br/>
    <button @click="H5pay">发起支付</button>
    <p>{{payUrl}}</p>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from "js-md5"
export default {
  // components: { InputComp, Tips, RadioComp, SelectCity },
  data() {
    return {
      payUrl: ''
    }
  },
  mounted() {
    let date = new Date()
    let timestamp = date.getTime()
    // console.log(this.getNonceStr(22), '时间戳：', timestamp, '5bd19d3a610caf93c01dc05462a42408'.toUpperCase())
    // this.get_client_ip()
  },
  methods: {
    H5pay() {
      this.getWxpayData().then((res) => {
        console.log('获取的参数：：', res)
        this.payUrl = res.mwebUrl
        // mwebUrl: "https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx280855175504285e2fda79732154013634&package=442920762
      })
    },
    getWxpayData() {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: 'https://derucci.net/wx/pushOrder',
          params: {
            tradeType: 'MWEB',
            body: '321定金',
            detail: '321定金',
            amount: 0.1,
            sceneInfo: {
              "h5_info": {
                "type":"Wap",
                "wap_url": "https://derucci.net",
                "wap_name": "321定金"
              }
            },
            ip: '223.104.63.246',
            callBack: 'https://derucci.net/wx/callback/pay'
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
    }
  }
}
</script>

<style lang="scss" scoped>
.wxpay {
  
}
</style>
