const httpModule = require("http");

httpModule.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify([
        {
            id: 1,
            title: "Post 1"
        },
        {
            id: 2,
            title: "Post 2"
        }
    ]));
    res.end();
}).listen(1000);