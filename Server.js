var http = require('http');
var fs = require('fs');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('Whoops! file is not find ');
        } else {
            response.write(data);
        }
        response.end();

    });



};

http.createServer(handleRequest).listen(27017);