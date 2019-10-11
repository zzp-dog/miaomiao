
const Mock = require('mockjs');
const MyInfo = require('./MyInfo');
Mock.mock('http://127.0.0.1/main.php?cid=1', 'post', () => {
  return MyInfo.page1
});


