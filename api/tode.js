var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql.js');

/* GET home page. */
router.post('/', function(req, res, next) {
	var insertObj = req.body;
	console.log(insertObj)
	mysql.connect((db) => {
		mysql.insert(db,'tode',insertObj,(result) => {
			
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
router.get('/', function(req, res, next) {
 	mysql.connect((db) => {
 		mysql.find({
 			db,
 			collectionName:"tode",
 			whereObj:{},
 			showObj:{
 				
 			},
 			success:(result) => {
 				console.log(result)
 				res.send(result)
 			}
 		})
 	})
});


module.exports = router;
