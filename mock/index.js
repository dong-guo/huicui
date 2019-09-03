import Mock from 'mockjs'
import data from '../data.json'

Mock.mock('/good/seller', {
  code: 0,
  codeMsg: 'success',
  data: data.seller
})
// Mock.mock('/good/users',{
//   code: 0,
//   codeMsg: 'success',
//   data: data.users
// })
