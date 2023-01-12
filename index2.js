const fs = require('fs');
  
let data = "HarryPotter,Game of thrones,twilight.";
  
fs.writeFile("novels.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log(fs.readFileSync("novels.txt", "utf8"));
  }
});