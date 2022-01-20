const fs = require("fs");
const csv = require("csvtojson");
const csvFilePath = "files/nodejs-hw1-ex1.csv";
const newFilePath = "files/nodejs-hw1-ex1.txt";
const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(newFilePath);
const {Transform} = require("stream");

// csv()
//   .fromFile(csvFilePath)
//   .then((jsonObj) => {
//     const data = jsonObj
//       .map((book) => JSON.stringify({book: book["Book"], author: book["Author"], price: book["Price"]}))
//       .join("\n");
//     fs.writeFile(newFilePath, data, (error) => {
//       if (error) throw error;
//       console.log("file is saved");
//     });
//   });

const myTransform = new Transform({
  transform(chunk, encoding, callback) {
    const book = JSON.parse(chunk.toString());
    const newData = {book: book["Book"], author: book["Author"], price: book["Price"]};
    console.log(newData);
    this.push(JSON.stringify(newData) + "\n");
    callback();
  },
});
readStream.pipe(csv()).pipe(myTransform).pipe(writeStream);
