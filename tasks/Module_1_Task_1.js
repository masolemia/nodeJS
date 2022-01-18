function ask() {
  process.stdout.write("Enter your word ");
}

process.stdin.on("data", function (data) {
  let result = data.toString().split("").reverse().join("");
  process.stdout.write(`${result}`);
  process.exit();
});
ask();
