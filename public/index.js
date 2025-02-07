const path = require("node:path");
const fs = require("node:fs");
const http = require("node:http");

// No need to redefine __dirname, it's automatically available in CommonJS

const server = http.createServer((req, res) => {
    // If the request URL is just the root, redirect to /index.html
    let filePath = req.url === "/" ? "index.html" : req.url;

    // Handle the correct path
    filePath = path.join(__dirname, filePath); // __dirname is available by default in CommonJS

    // Get the file extension to set the correct Content-Type
    const extname = path.extname(filePath);
    let contentType = "text/html";

    switch (extname) {
        case ".css":
            contentType = "text/css";
            break;
        case ".js":
            contentType = "application/javascript"; // Correct MIME type for JavaScript modules
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpeg";
            break;
        case ".ico":
            contentType = "image/x-icon";
            break;
    }

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Not Found");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        }
    });
});

server.listen(3000, () => console.log("Server running at http://localhost:3000"));

