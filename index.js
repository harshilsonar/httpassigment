const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  } else if (req.url === "/about") {
    res.end("welcome to about page");
  } else if (req.url === "/getproduct") {
    fs.readFile("./db.json", "utf-8", (err, data) => {
      if (err) {
        res.end("Error reading file");
      } else {
        const DbData = JSON.parse(data);

        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(DbData.products));
      }
    });
  } else if (req.url === "/user") {
    fs.readFile("./db.json", "utf-8", (err, data) => {
      if (err) {
        res.end("Error reading file");
      } else {
        const DbData = JSON.parse(data);

        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(DbData.user));
      }
    });
  }
  else
  {
    res.end("404 not found");
    }
    
});

server.listen(8080, () => {
  console.log("Server is running >>>>>>>>");
});
