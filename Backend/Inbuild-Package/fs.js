const fs = require("fs");

const quote = "No beauty shines brighter than that of a good heart🥳!!!";

// fs.writeFile("./awesome.ppt", quote, (err) => {
//   console.log("Completed Writing awesome.html");
// });

// const quote2 = "Live more, worry Less🥳";

// for (let i = 1; i <= 10; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log(`Completed Writing text-${i}.html`);
//   });
// }

//Task-1
// /backup/
// text-1.html
// text-2.html
// text-3.html
// ....
// text-10.html

//Task-2
// node fs.js 20

// const [, , noofFiles] = process.argv;
// console.log(noofFiles);
// for (let i = 1; i <= noofFiles; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//     console.log(`Completed Writing text-${i}.html`);
//   });
// }

// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error ❌", err);
//   }
//   console.log("The content of this file is => ", data);
// });

const niceQuote = "\nMake everyday a little less ordinarily";

// fs.appendFile("./nice.txt", niceQuote, (err) => {
//   console.log("Completed Writing nice.txt");
// });

// fs.unlink("./toRemove.txt", (err) => {
//   if (err) {
//     console.log("Error", err);
//   }
//   console.log("Deleted Successfully");
// });

// fs.readdir("./backup", (err, files) => {
//   console.log("All files names are: ", files);
// });

//Delete all files in backup folder

// fs.unlink("./backup/text-1.html", (err) => {
//   console.log("Deleted Successfully");
// });

// fs.readdir("./backup", (err, data) => {
//   data.forEach((fileName) => {
//     fs.unlink(`./backup/${fileName}`, (err) => {
//       console.log("Deleted Successfully", fileName);
//     });
//   });
// });

// writeFile => CallStack -> WebApi(Whoever finishes writing first)
// -> CallBack Q -> Event loop(push- CallStack empty) -> CallStack

// writeFile, readFile, appendFile - async;
// writeFileSync, readFileSync, appendFileSync - sync;

const bulkQuote = "Live more, worry Less";

const [, , noofFiles] = process.argv;

for (let i = 1; i <= noofFiles; i++) {
  fs.writeFileSync(`./backup/text-${i}.html`, bulkQuote);
  console.log("Completed Writing", i);
}
