function ask() {
  process.stdout.write("Enter your word ");
}

process.stdin.on("data", function (data) {
  let result = data.toString().split("").reverse().join("");
  console.log(result);
  //process.stdout.write(`${result}`); the same as console.log
  process.exit();
});
ask();
