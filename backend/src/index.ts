const fs = require("fs");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3030;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: any, res: any) => {
  res.send("Hey this is my API running 🥳");
});

app.get("/getMessage", async (req: any, res: any) => {
  fs.readFile(
    __dirname + "/" + "projects.json",
    "utf-8",
    (err: Error, data: any) => {
      res.end(data);
    }
  );
});

app.listen(PORT, (error: Error) => {
  if (error) {
    console.log("Error...");
  } else {
    console.log(`Server listening on ${PORT}`);
  }
});
