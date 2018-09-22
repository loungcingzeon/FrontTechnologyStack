const express = require('express'); // 第一步 导入 express
const mongoose = require('mongoose');

// 链接 mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';
mongoose.connect(DB_URL);

// 连接成功的信息输出
mongoose.connection.on('connected', function(){
    console.log('mongo connect success ');
});

// 类似于mysql的表 mongo里有文档，字段的概念

// 新建一个user 表
/**
 *imooc React APP
 * @type {Model}
 * user 是一个文档
 * new mongoose.Schema({})  值的内容
 */
const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String, require: true},
    age:{type:Number, require:true}
}));

// 删除数据 start
    /*User.remove({age:18}, function(err, doc){
        console.log('删除数据', doc);
    });*/

    /*User.remove({username:'shengxingjing'}, function(err, dox){
        if(!err){
            console.log('delete success');
            User.find({}, function(e, d){
                console.log(d);
            });
        }
    });*/
// 删除数据 end

// 新建一个数据 start
    User.create({
        name:'深圳',
        age:19,
    }, function(err, doc){
        if(!err){
            console.log(doc);
        }else{
            console.log(err);
        }
    });
// 新建一个数据 end





// 第二步 新建 app
const app = express();


// 更新 start
User.update({'user':'小明'}, {'$set':{age:26}}, function(err, doc){
  console.log('更新',doc)
});
// 更新 end



// 访问根目录
app.get(`/`, (req, res) => {
    /**
     * 第一个参数是 根目录
     * 第二个方法里，有两个参数
     *      req 请求数据
     *      res 响应数据
     */
    res.send(`<h1>Hello world</h1>`);

});

// 返回json数据
    /*app.get('/data', (req, res) => {
        // 查找数据
        User.find({}, function(err, doc){
            res.json(doc);
        });
        res.json({
            name:'imooc React APP',
            type:'It',
        });
    })*/

    // 查找数据
    /*app.get('/data', function(req, res){
        // 查找数据 user
        User.find({'user': '小明'}, function(err, doc){
            res.json(doc);
        });

    });*/

    // 只查找一条数据
    app.get('/data', function(req, res){
        User.findOne({'user':'小明'}, function(err, doc){
            res.json(doc);
        });
    })

// 删除数据
/*app.get('/delete', function(err, doc){

})*/


// 启动一个服务
app.listen(9093, () => {
    console.log(`Node app start at port 9093, ${'http://localhost:9093/data'}`);
})
