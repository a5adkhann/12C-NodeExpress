const httpModule = require("http");


httpModule.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write("<h2 style='color: red'>Node JS Server</h2>");
    response.end();
}).listen(4000);
