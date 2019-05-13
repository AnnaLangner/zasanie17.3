var os = require('os');
//var ShapeTime = require('./ShapeTime');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.gray, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.blue, cpu);
    /* ShapeTime.print(); */ console.log('Uptime: ~'.green, (uptime / 60).toFixed(0), 'min');
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.grey, userInfo.homedir);
}

exports.print = getOSinfo;

    