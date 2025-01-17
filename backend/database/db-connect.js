const mysql = require('mysql2/promise')

async function connect() {

    if (global.connection && global.connection.state !== 'disconnected') return global.connection

    const connection = await mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD ,
        database: process.env.MYSQL_DATABASE,
    })

    console.log('connection ready!')
    global.connection = connection

    return connection
}


connect()

module.exports = connect