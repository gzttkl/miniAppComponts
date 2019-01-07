// componts/custom-ul/custom-ul.js
Component({
  './custom-li':{
    type:'child',//关联的目标节点应为子节点
    linked(target){
      //每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
    },
    unlinked(target){
      //每次有custom-li被移除时执行，
    }
  },
  methods:{
    _getAllLi(){
      //使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li,且是有序的。
      const nodes = this.getRelationNodes('/componts/custom-li/custom-li');
      console.log('custom-ul中的_getAllLi函数');
      console.log(nodes);
    }
  },
  ready(){
    
    this._getAllLi();
  }
})
