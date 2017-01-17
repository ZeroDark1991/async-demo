'use strict'

const async = require('async')
const fs = require('fs')

// async.map(['yarn.lock', 'package.json'], fs.stat, function(err, results) {
//     // results is now an array of stats for each file
//     console.log(err)
//     console.log(results)
// })

// async.filter(['yarn.lock', 'package.json'], function(filePath, callback) {
//   fs.access(filePath, function(err) {
//     callback(null, !err)
//   });
// }, function(err, results) {
//     // results now equals an array of the existing files
//     console.log(results)
// });

// fs.access('./yarn.lock', function(err){
// 	console.log(err)
// })
fs.open('yarn.lock', 'w', function(err, fd){
	if(!err) {
		console.log(fd)
	}
})
async.map(['yarn.lock', 'package.json'], function(path, callback){
	fs.open(path, 'w', function(err, fd){
		callback(null, fd)
	})
}, function(err,fd){
	console.log(err)
	console.log(fd)
})