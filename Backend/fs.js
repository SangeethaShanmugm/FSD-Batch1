const fs = require("fs");

const quote = "No beauty shines brighter than that of a good heart🥳!!!";

fs.writeFile("./awesome.ppt", quote, (err) => {
  console.log("Completed Writing awesome.html");
});

const quote2 = "Live more, worry Less🥳";

for (let i = 1; i <= 10; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
    console.log(`Completed Writing text-${i}.html`);
  });
}

//Task-1
// /backup/
// text-1.html
// text-2.html
// text-3.html
// ....
// text-10.html

//Task-2
// node fs.js 20

const [, , noofFiles] = process.argv;
console.log(noofFiles);
for (let i = 1; i <= noofFiles; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
    console.log(`Completed Writing text-${i}.html`);
  });
}

fs.readFile("./cool123.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error ❌", err);
  }
  console.log("The content of this file is => ", data);
});
