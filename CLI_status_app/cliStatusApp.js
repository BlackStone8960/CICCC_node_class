const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const GB = 1024 ** 3;

const showSpec = (arg) => {
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
      console.log(os.networkInterfaces());
      break;
    default:
      break;
  }
};

showSpec(process.argv[2]);