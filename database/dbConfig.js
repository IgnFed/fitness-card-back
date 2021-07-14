const mysql = require('mysql')

const pool = mysql.createPool({
   connectionLimit: process.env.DB_CONNECTION_LIMIT || 10,
   host: process.env.DB_HOST || "localhost",
   user: process.env.DB_USER || "root",
   port: process.env.DB_PORT || 3306,
   password: process.env.DB_PASSWORD_1 || "",
   database: process.env.DB_DATABASE || "FitnessCard"
})

pool.getConnection((err, conn)=>{
   if(err){
      console.log(err)
      return
   }else{
      console.log(`CONNECTED AS ID: ${conn.threadId}`)
   }
})

module.exports =pool