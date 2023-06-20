const http = require("http");

http.createServer((request, response)=>{
    response.writeHead(200, { "content-type": "text/html" });
    response.write("Hello World!");
    response.end();
}).listen(5000, ()=> {
    console.log("Server listening at localhost:5000...");
});