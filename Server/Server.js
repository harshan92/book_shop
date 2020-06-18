var http = require('http');
let server=http.createServer((req, res, next)=>{
    res.write("Hello World!");
    res.end();
});

server.listen(process.env.PORT || 3000);