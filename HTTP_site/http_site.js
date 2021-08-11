const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('index.html', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successfully connected!");
      res.end(data);
    }
  })
}).listen(3000, () => {
  console.log(`Server is listening at port ${port}`);
});