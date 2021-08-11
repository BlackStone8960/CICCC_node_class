const express = require('express');
const app = express();
const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const port = 5500;
const GB = 1024 ** 3;

app.get('/', (req, res) => {
  res.send('Input URL as "/api/the information you want to know".');
})

app.get('/api/arch', (req, res) => {
  res.send(`Your PC's architecture is: ${os.arch()}`);
});

app.get('/api/cpus', (req, res) => {
  res.send(`Your PC's CPUs are: ${os.cpus()}`);
})

app.get('/api/ram', (req, res) => {
  res.send(`
    Your PC's total memory is ${os.totalmem() / GB} GB.
    Free memory is ${os.freemem() / GB} GB.
  `);
})

app.get('/api/diskspace', (req, res) => {
  checkDiskSpace('C:/').then(diskSpace => {
    res.send(`
      Your PC's total disk space in C drive is ${diskSpace.size / GB} GB.
      Free disk space is ${diskSpace.free / GB} GB.
    `);
  })
});

app.get('/api/hostname', (req, res) => {
  res.send(`Your PC's host name is: ${os.hostname()}`);
})

app.get('/api/ipaddress', (req, res) => {
  res.send(os.networkInterfaces());
})

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
})