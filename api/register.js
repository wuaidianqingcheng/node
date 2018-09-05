var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql.js');
var url  = require('url')

/* GET home page. */
router.post('/', function(req, res, next) {
	var insertObj = req.body;
	console.log(insertObj)
	mysql.connect((db) => {
		mysql.insert(db,'register',insertObj,(result) => {
			console.log(11111111)
		})
	})
 	/*mysql.connect((db) => {
 		mysql.find({
 			db,
 			collectionName:"aaa",
 			whereObj:{},
 			showObj:{
 				
 			},
 			success:(result) => {
 				console.log(result)
 				res.send(result)
 			}
 		})
 	})*/
});
router.get('/',function(req,res,next){
	mysql.connect((db) => {
 		mysql.find({
 			db,
 			collectionName:"register",
 			whereObj:{},
 			showObj:{
 				
 			},
 			success:(result) => {
 				//console.log(result)
 				res.send(result)
 			}
 		})
 	})
})
router.post('/update',function(req,res,next){
	var {tel,money} = req.body;
	var whereObj = {
		tel
	}
	var updateObj = {
		$set:{
			money
		}
	}
	console.log(updateObj)
	mysql.connect((db) => {
		mysql.updateOne(db,'register',whereObj,updateObj,(result) => {
			console.log(111)
		})
	})
})
module.exports = router;
