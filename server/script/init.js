// 数据库初始化脚本
db.createCollection('sequences');
db.sequences.insert({_id:"carouselid",sequence_value:0});

db.createCollection('carousels');
db.carousels.insert({_id: 1,carousels:[]});

// 创建获取序列值函数
db.system.js.insert({
  _id : "getNextSequenceValue",
  value : function (sequenceName){
    var sequenceDocument = db.sequences.findAndModify(
        {
          query:{_id: sequenceName },
          update: {$inc:{sequence_value:1}},
          "new":true
        });
    return sequenceDocument.sequence_value;
  }
});