const db = require('mysql');


const connection = db.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Connectado ao banco ${process.env.DB_NAME}` )
});

module.exports = connection;