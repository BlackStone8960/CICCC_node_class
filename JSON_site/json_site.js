const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const jsonResponse = {
    status: 200,
    message: "Connected successful",
    result: ["A", "B", "C"],
    code: 2000
  }
  console.log("Server running");
  res.end(JSON.stringify(jsonResponse));
}).listen(3000);