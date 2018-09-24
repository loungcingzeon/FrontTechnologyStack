const express = require('express');
const mongoose = require('mongoose');

// 链接 并且使用 imooc 这个集合
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', () => {
    console.log('mongo connect success');
});

// 类似于mysql的表 mongo 里有文档、字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  user:{type:String, require:true},
  age:{type:Number, require:true},
}));


// 新增数据
User.create({
  user:"xiaohua",
  age:12,
}, (err, doc) => {
    if(!err){
        console.log("doc",doc);
    }else{
        console.log("err",err);
    }
});

User.update({user:"xiaoming"}, {'$set':{age:26}}, (err, doc) => {
    console.log("updatedoc", doc);
});

const app = express();
app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1>`);
});

app.get('/data', (req, res) => {
    User.findOne({user:'xiaoming'}, (err, doc) => {
        res.json(doc);
    })
});

app.listen(9093, () => {
    console.log('Node app start at port 9093')
});

