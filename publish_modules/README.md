# Introduce
```
npm install check-os-spec
```
```javascript
const checkOsSpec = require('check-os-spec');
```

# Set Router
You can set router to search about OS spec by following command.
```javascript
checkOsSpec.setRouter();
```

By inputting following URL, you can search your PC's specs as follows.

 - http://localhost:5500/api/arch ----> shows architecture
 - http://localhost:5500/api/cpus ----> shows cpus
 - http://localhost:5500/api/ram ----> shows ram
 - http://localhost:5500/api/diskspace ----> shows disk space
 - http://localhost:5500/api/hostname ----> shows hostname
 - http://localhost:5500/api/ipaddress ----> shows ip address

# CLI command
To see spacs in CLI, you should execute function as below.
```javascript
checkOsSpec.showSpec();
```
By inputting commands as follows on CLI, you can see specs as well.

 - node yourapp.js -arch ----> shows architecture
 - node yourapp.js -cpu ----> shows cpus
 - node yourapp.js -ram----> shows ram
 - node yourapp.js -hdd----> shows disk space
 - node yourapp.js -hostname ----> shows hostname
 - node yourapp.js -ip ----> shows ip address

## Fortune telling
You can do fortune telling as bonus!!
Execute below function first.

```javascript
checkOsSpec.fortuneTeller();
```

To have fortune told, type "love" or "work" or "money" as an argument on CLI.
Results related with the word will be appeared on console of CLI.