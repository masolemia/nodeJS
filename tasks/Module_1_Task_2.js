const fs = require("fs");
const csv = require("csvtojson");
const csvFilePath = "files/nodejs-hw1-ex1.csv";
const newFilePath = "files/nodejs-hw1-ex1.txt";

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    //let data = JSON.stringify(jsonObj);
    let data = jsonObj.toString();
    return data;
  })
  .then((data) => {
    fs.writeFile(newFilePath, data, (error) => {
      if (error) throw error;
      console.log("file is saved");
    });
  });

// function convertingFile(csvFilePath, newFilePath, callback) {
//   fs.readFile(csvFilePath, "utf-8", (error, file) => {
//     if (error) {
//       console.error(error);
//       callback(error);
//       return;
//     }
//     fs.writeFile(newFilePath, file, (error) => {
//       if (error) {
//         console.error(error);
//         callback(error);
//         return;
//       }
//       callback(null);
//     });
//   });
// }

// convertingFile(csvFilePath, newFilePath, (error) => {
//   if (!error) {
//     console.log("file was converted");
//   } else {
//     console.log("file wasn't converted");
//   }
// });
