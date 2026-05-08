// Import HTTP Module
const http = require("http");

// Create Server
const server = http.createServer((req, res) => {

    // Response Header
    res.writeHead(200, { "Content-Type": "text/html" });

    // Response Message
    res.write("<h1>Node.js Server Running Successfully</h1>");

    // End Response
    res.end();
});

// Server Port
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});