let http = require('http');let onRequest = function(request, response){  console.log('request received');  /**   * 第一个参数是状态码 200   * 第二个参数是类型   */  response.writeHead(200, {'Content-Type': 'text/plain'});  //response.write('<h1>hello from out application</h1>');  response.end('hello from out application');}let server = http.createServer(onRequest);server.listen(8081, '127.0.0.1');console.log('Server started on localhost port 8081');