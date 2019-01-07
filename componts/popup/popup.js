const myBehavior=require('../my-behavior.js');
Component({
  behaviors: [myBehavior],
  //组件的对外属性，是属性名到属性设置的映射表：
  properties: {
    num: {//属性名：
      type:'Number',//类型，目前接受的类型，String,Number,Boolean,Object,Array,null
      value:'',
      observer(newVal,oldVal,changedPath){
        //属性被改变时执行的函数
        console.group();
        console.log('num属性被改变');
        console.log('newVal的值：',newVal);
        console.log('oldVal的值：', oldVal);
        console.groupEnd();
      }
    },
    myNum: Number // 简化的定义方式
  },

  // 组件的初始数据
  data: {
    testData: '组件内部定义的测试信息'
  },

  //组件的方法列表
  methods: {
    add() {
      this.setData({
        num: this.data.num + 1
      })
      // this.triggerEvent('numChange', this.data.num);
    },
    sub() {
      if (this.data.num > 0) {
        this.setData({
          num: this.data.num - 1
        })
      }
      // this.triggerEvent('numChange', this.data.num);
    },
    //组件上的事件与页面的事件绑定设置：
    onComponts(){
      console.log("组件内部对事件的绑定");
      const detail={
        'com_detail01':'myTestEventDetail01',
        'com_detail02': 'myTestEventDetail02',
      } //detail对象，提供给事件监听函数：
      const option={
        'bubbles':true,
        'composed':false,
        'capturePhase':false
      } //触发事件的选项：
      this.triggerEvent('myTestEvent', detail, option);
    }
  },
  //组件刚创建时执行
  created(){
    console.log("created函数");
  },
  //组件布局完成后执行：
  ready(){
    console.group();
    console.log("ready函数");
    console.log('this.is的值：', this.is);
    console.log('this.id的值：', this.id);
    console.log('this.dataset的值：', this.dataset);
    console.log('this.data的值：', this.data);
    console.log('this.properties的值：', this.properties);
    console.log( 'this.hasBehavior的值：',this.hasBehavior);
    console.groupEnd();

  },
  //组件间关系定义：
  relations:{

  },

  //组件接受的外部样式类：
  externalClasses: ['com-purple','com-orange'],
  //一些选项：
  options:{
    // addGlobalClass设置为true，就可以使用外部app.wxss或是组件引用页面定义的样式，影响组件样式
    addGlobalClass:true
  },
  // attached() {}, //此处的attache的声明会被lifetimes字段中的声明覆盖：
  //组件生命周期生命对象：
  lifetimes:{
    //在组件实例进入页面节点树时执行：
    attached() {
      console.log("attached函数");
    },
    //在组件被移动到节点树另一个位置时执行：
    moved() {
      console.log("moved函数");
    },
    //组件被从页面节点树移除时执行：
    detached() {
      console.log("detached函数");
    },
  },
  //组件所在页面的生命周期声明对象，支持页面的show/hide等生命函数：
  pageLifetimes:{
    // 组件所在页面的生命周期函数
    show() { },
    hide() { },
    resize() { },
  }
})
