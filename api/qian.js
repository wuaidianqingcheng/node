var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql.js');

/* GET home page. */
router.post('/', function(req, res, next) {
 	
 		var insertObj = req.body;
		console.log(insertObj)
		mysql.connect((db) => {
		mysql.insert(db,'qian',insertObj,(result) => {
			console.log(11111111)
		})
	
 	})
})
router.get('/', function(req, res, next) {
 	mysql.connect((db) => {
 		mysql.find({
 			db,
 			collectionName:"qian",
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
