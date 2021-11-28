const fs = require("fs");
const csv = require("csvtojson");
const csvFilePath = "../files/nodejs-hw1-ex1.csv";

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    let data = jsonObj.toString();
    fs.writeFile("../files/nodejs-hw1-ex1.txt", data, (error) => {
      if (error) throw error;
      console.log("file is saved");
    });
  });

// fs.readFile("../files/example.txt", "utf-8", (error, file) => {
//   console.log(file);
// });
