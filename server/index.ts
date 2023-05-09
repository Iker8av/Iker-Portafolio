const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");
const cors = require("cors");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cors({ credentials: true, origin: "http://localhost:3000" }));

    server.get("/getMessage", async (req: any, res: any) => {
      fs.readFile(
        __dirname + "/" + "projects.json",
        "utf-8",
        (err: Error, data: any) => {
          res.end(data);
        }
      );
    });

    server.listen(3030, (err: any) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3030");
    });
  })
  .catch((ex: any) => {
    console.error(ex.stack);
    process.exit(1);
  });
