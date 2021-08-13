const express = require('express');
const app = express();
const os = require('os');
const fs = require('fs');
const checkDiskSpace = require('check-disk-space').default;
const path = require('path');
const resultPath = path.join(__dirname, 'JSON', 'fortuneTellingResult.json');
const port = 5500;
const GB = 1024 ** 3;
const arg = process.argv[2];

const setRouter = () => {
  app.get('/', (req, res) => {
    res.send('Input URL as "/api/the information you want to know".');
  });

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
    res.send(getLocalAddress());
  })

  app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
  })
};

const showSpec = () => {
  switch (arg) {
    case '-arch':
      console.log(`Your PC's architecture is: ${os.arch()}`);
      break;
    case '-cpu':
      console.log(os.cpus());
      break;
    case '-ram':
      console.log(`
        Your PC's total memory is ${os.totalmem() / GB} GB.
        Free memory is ${os.freemem() / GB} GB.
      `);
      break;
    case '-hdd':
      checkDiskSpace('C:/').then(diskSpace => {
        console.log(`
          Your PC's total disk space in C drive is ${diskSpace.size / GB} GB.
          Free disk space is ${diskSpace.free / GB} GB.
        `);
      });
      break;
    case '-hostname':
      console.log(`Your PC's host name is: ${os.hostname()}`);
      break;
    case '-ip':
      console.log(getLocalAddress());
      break;
    default:
      break;
  }
};

const getLocalAddress = () => {
  const ifacesObj = { ipv4: [], ipv6: [] };
  const interfaces = os.networkInterfaces();

  for (const dev in interfaces) {
    interfaces[dev].forEach(details => {
      if (!details.internal) {
        const ipObj = { name: dev, address: details.address };
        switch (details.family) {
          case "IPv4":
            ifacesObj.ipv4.push(ipObj);
            break;
          case "IPv6":
            ifacesObj.ipv6.push(ipObj);
            break;
          default:
            break;
        }
      }
    })
  }
  return ifacesObj;
};

const fortuneTeller = () => {
  const dataJSON = fs.readFileSync(resultPath).toString();
  const data = JSON.parse(dataJSON);

  if (arg === "work" || arg === "love" || arg === "money") {
    const resultsArr = data[arg];
    const randomNum = Math.floor(Math.random() * (resultsArr.length));
    console.log(resultsArr[randomNum]);
  } else {
    console.log("To have fortune told, type love or work or money as an argument");
  };
};

module.exports = { setRouter, showSpec, fortuneTeller };