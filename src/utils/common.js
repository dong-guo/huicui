import axios from 'axios'
export default class Common {
  // 参数加密
  getSign (arr) {
    let str = ''
    for (let i = 0; i < arr.length; i++) {
      str = str === '' ? `${arr[i][0]}=${arr[i][1]}` : `${str}&${arr[i][0]}=${arr[i][1]}`
    }
    console.log('加密参数：', str)
    // 严格模式下取消注释显示红色波浪线  ----改2019/9/3
    // eslint-disable-next-line no-undef
    return sha1.hex(str)
  }

  // 获取token
  token () {
    return new Promise(function (resolve, reject) {
      axios({
        method: 'post',
        url: 'https://derucci.net/app/token.api',
        params: {
          key: '994061370314006529',
          secretKey: '477a1d7cc03d21d5abce55ec12170d3'
        }
      })
        .then((res) => {
          if (res) {
            resolve(res.data.token)
          }
        }).catch((error) => {
          if (error) {
            alert('token获取失败！')
          }
        })
    })
  }
}

// 校验手机格式
let testPhone = (phone) => {
  const phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
  console.log(999)
  return phoneReg.test(phone)
}
export { testPhone }
// 判断是否为空或者空格
let isNull = (str) => {
  if (str.match(/^[ ]*$/)) {
    return false
  } else {
    return true
  }
}
export { isNull }
// 判断是2019/3/24号之前
let checkTime = () => {
  let year = new Date().getFullYear()
  let mouth = new Date().getMonth() + 1
  let day = new Date().getDate()
  // console.log(year,mouth,day,1111)
  if (year === 2019 && mouth === 9 && day < 16) {
    return 'begin'
  } else if (year === 2019 && mouth < 9) {
    return 'before'
  } else {
    return false
  }
}
export { checkTime }

// 返回每个时间段数字
let countNumber = () => {
  let year = new Date().getFullYear()
  let mouth = new Date().getMonth() + 1
  let day = new Date().getDate()
  let hour = new Date().getHours()
  // let num
  console.log('time', day, hour)
  // if(year == 2019 && mouth == 3 && day < 25) {
  //   if(hour >= 0 && hour < 15) {
  //     num = 14*(day*3 - 2)
  //     return num
  //   }else if(hour >= 15 && hour < 21) {
  //     num = 14*(day*3 -1)
  //     return num
  //   }else if(hour >= 21) {
  //     num = 14*(day*3)
  //     return num
  //   }
  // }else {
  //   return false
  // }
  let num
  // 严格模式下取消注释显示红色波浪线  ----改2019/9/3
  // eslint-disable-next-line eqeqeq
  if (year == 2019 && mouth == 3 && day < 24) {
    if (hour >= 0 && hour < 15) {
      num = 860 + [(day - 21) * 3] * 18
      return num
    } else if (hour >= 15 && hour < 21) {
      num = 860 + [(day - 21) * 3 + 1] * 18
      return num
    } else if (hour >= 21) {
      num = 860 + [(day - 21) * 3 + 2] * 18
      return num
    }
  // 严格模式下取消注释显示红色波浪线  ----改2019/9/3
  // eslint-disable-next-line eqeqeq
  } else if (year == 2019 && mouth == 3 && day == 24) {
    if (hour >= 0 && hour < 15) {
      num = 1010
      return num
    } else if (hour >= 15 && hour < 21) {
      num = 1017
      return num
    } else if (hour >= 21) {
      num = 1030
      return num
    }
  } else {
    return false
  }
}

export { countNumber }

let phoneDisplay = (phone) => {
  let str2 = phone.substr(0, 3) + '****' + phone.substr(7)
  return str2
}
export { phoneDisplay }

let usernameDisplay = (name) => {
  return new Array(name.length).join('*') + name.substr(-1)
  // let newName = name.replace(/.(?=.)/g, '*');
  // return newName
}

export { usernameDisplay }

let nameDisplay = (name) => {
  let newStr
  if (name.length === 2) {
    newStr = name.substr(0, 1) + '*'
  } else if (name.length > 2) {
    let char = ''
    for (let i = 0, len = name.length - 2; i < len; i++) {
      char += '*'
    }
    newStr = name.substr(0, 1) + char + name.substr(-1, 1)
  } else {
    newStr = name
  }

  return newStr
}
// 严格模式下取消注释显示红色波浪线  ----改2019/9/3
// eslint-disable-next-line eol-last
export { nameDisplay }