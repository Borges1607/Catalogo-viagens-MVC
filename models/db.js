async function connect(){
  if(global.connection && global.connection.state !== 'disconnected')
      return global.connection;
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
      host: 'sql10.freemysqlhosting.net',
      port: '3306',
      user: 'sql10645772',
      password: 'sCfXSu6sQX',
      database: 'sql10645772'
    });
  console.log("conectou no MySQL!!");
  global.connection = connection;
  return connection;
}

async function  query(sql){
  const conn = await connect();
  const [rows] = await conn.query(sql);
  return rows;
}

module.exports = {query}