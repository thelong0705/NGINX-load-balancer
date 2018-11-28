const express = require('express')
const app = express()

'use strict';

var os = require('os');
var ifaces = os.networkInterfaces();
var ip_name = '';

// get user 's ip address
Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;
  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      return;
    }
    ip_name = iface.address;
    ++alias;
  });
});



var server = app.listen(3000, () => console.log('I just connected on port 3000!'))

app.get('/', (req, res) =>  { 
  res.send('Hello World! from: ' + ip_name);
})
