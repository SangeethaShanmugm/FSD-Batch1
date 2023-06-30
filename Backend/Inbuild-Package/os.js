const os = require("os"); //Inbuilt package

console.log("Free Memory:", os.freemem() / 1024 / 1024 / 1024);
//1kb => 1024 bytes -> 1mb => 1024kb -> 1gb => 1024mb
console.log("Total Memory:", os.totalmem() / 1024 / 1024 / 1024);
console.log("OS version", os.version());
console.log("cpus", os.cpus());
