let http = require('http');let fs = require('fs');// 重构function startServer(){  let onRequest = function(request, response){    // http://localhost:8081/api/v1/records    //console.log('request received' + request.url);  // request received/api/v1/records    if(request.url === '/' || request.url === '/home'){      response.writeHead(200, {'Content-Type': 'text/html'});      // 读一个流      fs.createReadStream(__dirname + '/views/index.html', 'utf8').pipe(response);    }else if(request.url === '/review'){      response.writeHead(200, {'Content-Type': 'text/html'});      fs.createReadStream(__dirname + '/views/review.html', 'utf8').pipe(response);    }else if(request.url === '/api/v1/records'){      response.writeHead(200, {'Content-Type': 'application/json'});      let jsonObj = {        name:'Alan',      };      response.end(JSON.stringify(jsonObj));    }else{      response.writeHead(200, {'Content-Type': 'text/html'});      fs.createReadStream(__dirname + '/views/404.html', 'utf8').pipe(response);    }  };  let server = http.createServer(onRequest);  server.listen(8081);  console.log('Server started on localhost port 8081');}exports.startServer = startServer;