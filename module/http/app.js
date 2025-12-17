import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plan"});
    res.end("Hello World");
})
server.listen(2323, () => {
    console.log("Server is listening on port 2323")
});