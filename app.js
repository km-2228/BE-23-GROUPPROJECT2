const express = require('express')
const app = express();
const PORT = 3030;
const db = require('./models')
const allRouter = require("./routes/router");
const Role = db.role
const auth = require('./routes/router');



app.use(express.json());
app.use(allRouter);


app.listen(PORT, () => {
    console.log("server running on PORT", PORT)
})

app.use('/', auth);


// db.sequelize.sync()
// db.sequelize.sync({force: false}).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
//   });

//   function initial() {
//     Role.create({
//       id: 1,
//       name: "user"
//     });

//     Role.create({
//       id: 2,
//       name: "admin"
//     });

//     Role.create({
//       id: 3,
//       name: "moderator"
//     });
//   }

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