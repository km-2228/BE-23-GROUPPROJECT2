const express = require('express')
const app = express();
const PORT = 3030;
const db = require('./models')
const allRouter = require("./routes/router");


app.use(express.json());
app.use(allRouter);


app.listen(PORT, () => {
    console.log("server running on PORT", PORT)
})




// const mysql = require('mysql2')
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'db_group_project'
// })

// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('connect to db')
// })

// connection.end()

module.exports = app;