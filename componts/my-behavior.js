module.exports=Behavior({
  behaviors:[],
  properties:{
    myBehaviorProperty:{
      type:String,
      value:'Behavior中定义的数据',
      observer(newVal, oldVal, changedPath) {
        console.log('behavior中的newVal:',newVal);
        console.log('behavior中的oldVal:', oldVal);
      }
    }
  },
  data:{
    myBehaviorData:{}
  },
  attached(){},
  methods:{
    myBehaviorMethod(){
      console.log("methods中的myBehaviorMethod");
    }
  }
});