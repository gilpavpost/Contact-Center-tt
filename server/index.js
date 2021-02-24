const express = require("express");
const cors = require("cors");
const pg = require("pg")

const app = express();
const server= {
    host: "localhost",
    port: "80"
}

const db = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "contactdb",
  password: "er5jk8",
  port: 5432,
});

app.use(cors());
app.use(express.json());


function insertRequest(data) {
  let date = new Date();
  let formatedDate =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  var query = `INSERT INTO table1 ("One", "Two", "Date") VALUES ('${data.one}', '${data.two}', '${formatedDate}')`;
  db.connect();
  db.query(query, (err, data) => {
    if (err) throw new Error(err);
    db.end();
  });
}

app.post("/send", (req, response) => {
  insertRequest(req.body);
  response.json({
    message: "accepted",
  });
});

app.post("/getdata", (req, response) => {
  db.connect();
  db.query('SELECT "One", "Two" FROM table1')
    .then((res) => {
      response.json(res.rows);
      db.end();
    })
    .catch((e) => {
        db.end();
        console.error(e.stack)});
});


app.listen(server.port, server.host, () => {
  console.log("server is running on http://"+ server.host+":"+server.port);
});
