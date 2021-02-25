const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const server = {
  host: "localhost",
  port: "80",
};

app.use(cors());
app.use(express.json());

app.post("/send", (req, response) => {
 
  db.query(
    `INSERT INTO table1 ("One", "Two", "Date") VALUES ('${req.body.one}', '${req.body.two}', NOW())`,
    (err, res) => {
      if (err) {
        response.json({
          message: "fail",
        });
        return next(error);
      }
      response.json({
        message: "accepted",
      });
    }
  );
});

app.post("/getdata", (req, response) => {
  db.query('SELECT "One", "Two" FROM table1', (err, res) => {
    if (err) {
      return next(error);
    }
    response.json(res.rows);
  });
});

app.listen(server.port, server.host, () => {
  console.log("server is running on http://" + server.host + ":" + server.port);
});
