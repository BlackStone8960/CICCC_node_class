// const fs = require('fs');
const fs = require('fs-extra');
const prompts = require('prompts');
const arg1 = process.argv[2];
const arg2 = process.argv[3];
const arg3 = process.argv[4];

const deleteFile = () => {
  fs.unlink(arg2, err => {
    if (err) { throw err; }
    console.log(`Deleted ${arg2}!`)
  })
};

const main = () => {
  switch (arg1) {
    case '--createFile':
      fs.writeFile(arg2, '', err => {
        if (err) { throw err; }
        console.log(`Created ${arg2}!`);
      });
      break;
    case '--writeFile':
      fs.writeFile(arg2, arg3, err => {
        if (err) { throw err; }
        console.log(`Wrote a content on ${arg2}!`);
      });
      break;
    case '--appendFile':
      fs.appendFile(arg2, arg3, err => {
        if (err) { throw err; }
        console.log(`Appended a content to ${arg2}!`)
      })
      break;
    case '--renameFile':
    case '--moveFile':
      fs.rename(arg2, arg3, err => {
        if (err) { throw err; }
        console.log(`Renamed ${arg2} to ${arg3}!`);
      });
      break;
    case '--deleteFile':
      if (arg3 === '-y') {
        deleteFile();
      } else {
        (async () => {
          let questions = {
            type: 'text',
            name: 'answer',
            message: `Are you sure you delete ${arg2}? (y/n)`
          };
          let response = await prompts(questions);
          const result = response.answer.trim().toLowerCase()
          if (result === 'y' || result === 'yes' || result === '') {
            deleteFile();
          }
        })()
      }
      break;
    case '--listFiles':
      fs.readdir(arg2, (err, files) => {
        if (err) { throw err; }
        files.forEach(file => {
          console.log(file);
        })
      });
      break;
    case '--copyFile':
      fs.copyFile(arg2, arg3, err => {
        if (err) { throw err; }
        console.log(`Copied file from ${arg2} to ${arg3}!`);
      })
      break;
    case '--copy':
      fs.copy(arg2, arg3, err => {
        if (err) { throw err; }
        console.log(`Copied file from ${arg2} to ${arg3}!`);
      });
      break;
    case '--mkdirs':
      fs.mkdirs(arg2, err => {
        if (err) { throw err; }
        console.log(`Made ${arg2}!`);
      });
      break;
    case '--size':
      const stat = fs.statSync(arg2);
      console.log(`The size of ${arg2} is ${stat.size} bytes.`);
      break;
    case '--view':
      fs.readFile(arg2, 'utf-8', (err, file) => {
        if (err) { throw err; }
        console.log(file);
      })
      break;
    default:
      break;
  }
};

main();