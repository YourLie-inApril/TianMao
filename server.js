const http = require("http"),
    fs = require("fs"),
    path = require("path"),
    url = require("url");

let root = path.join(__dirname, "/");
let server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let filepath = path.join(root, pathname);
    fs.stat(filepath, (err, states) => {
        if (err) {
            res.writeHead(404);
            res.end("404 Not Found.");
        } else {
            res.writeHead(200);
            fs.createReadStream(filepath).pipe(res);
        }
    });
});
server.listen(8000);
console.log("server is running");