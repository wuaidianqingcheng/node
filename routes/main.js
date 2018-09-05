var express = require('express');
var router = express.Router();
var mysql = require('./tool/mysql.js');

/* GET home page. */
router.get('/', function(req, res, next) {
 	mysql.connect((db) => {
 		mysql.find({
 			db,
 			collectionName:"main",
 			whereObj:{},
 			showObj:{
 				_id:0
 			},
 			success:(result) => {
 				console.log(result)
 				res.send(result)
 			}
 		})
 	})
});


module.exports = router;
