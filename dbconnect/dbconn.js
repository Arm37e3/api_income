const  mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'income'
});

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('Connected to database');
    console.log("http://127.0.0.1:3000");
});
module.exports = db;