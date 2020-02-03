/*
 * Write your server code in this file.
 *
 * name: Thuy-Vy Nguyen
 * email: nguythu2@oregonstate.edu
 */

 var http = require('http');

 var server = http.createServer(function( req,res){
   res.write('Hello World - thuyvy!');
   res.end();
 });

server.listen(3001);
