let http = require('http');let fs = require('fs');let onRequest = function(request, response){  console.log('request received');  response.writeHead(200, {'Content-Type': 'text/html'});  // 读一个流  let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');  myReadStream.pipe(response);};let server = http.createServer(onRequest);server.listen(8081);console.log('Server started on localhost port 8081');