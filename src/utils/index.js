import { Request } from './request'
import { getTimestamp } from './rotate'
class IndexModel extends Request {
  baseUrl = 'https://derucci.net'
  testUrl = 'https://mobiletest.derucci.net/consumer-admin'
  // path = 'http://10.11.8.7'
  path = 'https://derucci.net'
  // 模拟获取抽奖类型
  // getAwardList() {
  //   return this.getData({
  //     url: '/good/seller',
  //   })
  // }
  getPro () {
    return this.getData({
      url: this.path + '/api/public/v1/region?type=PROVINCE'
    })
  }
  getCity (code) {
    return this.getData({
      url: this.path + '/api/public/v1/region?type=CITY',
      params: {
        parentCode: code
      }
    })
  }
  getArea (code) {
    return this.getData({
      url: this.path + '/api/public/v1/region?type=AREA',
      params: {
        parentCode: code
      }
    })
  }
  // 客户录入保存信息
  saveData (obj) {
    return this.getPostData({
      url: this.baseUrl + '/api/lotteryuser/v1/save',
      data: {
        prizeType: obj.prizeType,
        username: obj.username,
        phone: obj.phone,
        province: obj.province,
        city: obj.city,
        shopName: obj.shopName,
        dealerName: obj.dealerName,
        field1: obj.field1 ? obj.field1 : ''
      }
    })
  }
  // 4/1抽奖
  getPrizes (date, type) {
    return this.getData({
      url: this.baseUrl + '/api/lotteryuser/v1/getPrizes',
      params: {
        date: date,
        type: type
      }
    })
  }
  // 获取用户unionid
  getUnionId (code) {
    return this.getData({
      url: this.baseUrl + '/api/public/v1/getWxAccessToken',
      params: {
        code: code,
        appId: 'wx877a7e37b0de0a87',
        timestamp: getTimestamp()
      }
    })
  }
  // 转盘抽奖后保存信息
  rotateSaveInfo (unionId, type) {
    return this.getPostData({
      url: this.testUrl + '/api/lotteryuser/v1/saveturntable',
      data: {
        // unionId: 'o6a0M1M6d84ygn5COQvDVwDdEHu4',
        // unionId: 'o6a0M1LJgn_Y7V2F8r92NoKIOplQ',
        unionId: unionId,
        filed1: type
      }
    })
  }
  // 获取用户信息
  rotateGetInfo (unionId) {
    return this.getData({
      url: this.testUrl + '/api/lotteryuser/v1/turntable',
      params: {
        unionId: unionId
        // unionId: 'o6a0M1LJgn_Y7V2F8r92NoKIOplQ'
        // unionId: 'o6a0M1M6d84ygn5COQvDVwDdEHu4'
      }
    })
  }
}

export { IndexModel }
