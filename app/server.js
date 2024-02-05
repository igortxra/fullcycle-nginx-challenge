const express = require('express')
const mysql = require('mysql2');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const con = mysql.createConnection({
    host: "database", user: "root", password: "root", database: "appdb"
  });


  con.query(`INSERT INTO people (name) VALUES ('Igor')`, function(err, _, _) {
    if (err) {
      throw err;
    }
  })

  con.query(`SELECT name FROM people`, function(err, result, _) {
    if (err) {
      throw err;
    }
    else {
      response = '<h1>Full Cycle Rocks!</h1>' + result.map(element => element.name);
      res.send(response)
    }
  });
})

app.listen(port, () => { })
