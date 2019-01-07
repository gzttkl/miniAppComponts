//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    num: 1
  },
  numChange(e) {
    const numi = e.detail;
    console.log(e);
  },
  indTestEvent(e){
    console.group();
    console.log('==================index页面上的组件事件，得到组件内定义的内容部分=====================');
    console.log(e.detail);
    console.log(e);
    console.groupEnd();
  }
})
