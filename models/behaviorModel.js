var express = require('express');
var router = express.Router();
var mongoUtil = require('../util/mongoUtil');


// var dbo = null;
module.exports = {
    // items: function (req, callback) {
    //     sql = 'SELECT * FROM accounts';
    //     return connection.query(sql, callback);
    // },
    // item: function (req, callback) {
    //     sql = mysql.format('SELECT * FROM accounts WHERE id = ?', [req.params.id]);
    //     return connection.query(sql, callback);
    // },
    add: function (req, callback) {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var createTime = date+' '+time;

        //設定物件
        var behaviorModelObj = { 
            ip: req.body.ip, //ip
            url: req.body.url, //url
            element: req.body.element, //元素
            type: req.body.type,  //行為類型
            description: req.body.description, //行為描述
            createTime: createTime,//時間
        };

        try {
            //新增
            var db = mongoUtil.getDb();
            db.collection("Behavior").insertOne(behaviorModelObj, function(err, res) {
             if (err) throw err;
            });
            callback(err,behaviorModelObj);
        }
        catch (e) {
            callback(null,behaviorModelObj);
        }
    },
    // delete: function (req, callback) {
    //     sql = mysql.format('DELETE FROM accounts WHERE id = ?', [req.params.id]);
    //     return connection.query(sql, callback);
    // },
    // put: function (req, callback) {
    //     // 使用 SQL 交易功能實現資料回滾，因為是先刪除資料在新增，且 Key 值須相同，如刪除後發現要新增的資料有誤，則使用 rollback() 回滾
    //     connection.beginTransaction(function (err) {
    //         if (err) throw err;
             
    //         sql = mysql.format('DELETE FROM accounts WHERE id = ?', [req.params.id]);
 
    //         connection.query(sql, function (err, results, fields) {
    //             // SQL DELETE 成功 results.affectedRows 會返回 1，反之 0
    //             if (results.affectedRows) {
    //                 req.body.id = req.params.id;
    //                 sql = mysql.format('INSERT INTO accounts SET ?', req.body);
                     
    //                 connection.query(sql, function (err, results, fields) {
    //                     // 請求不正確
    //                     if (err) {
    //                         connection.rollback(function () {
    //                             callback(err, 400);
    //                         });
    //                     } else {
    //                         connection.commit(function (err) {
    //                             if (err) callback(err, 400);
     
    //                             callback(err, 200);
    //                         });
    //                     }                        
    //                 });
    //             } else {
    //                 // 指定的資源已不存在
    //                 callback(err, 410);
    //             }
    //         });
    //     });
    // },
    // patch: function (req, callback) {       
    //     sql = mysql.format('UPDATE accounts SET ? WHERE id = ?', [req.body, req.params.id]);
    //     return connection.query(sql, callback);
    // }
};