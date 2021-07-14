const data = {
   selectAll :(tb_name) => {
      return `SELECT * FROM ${tb_name}`
   },
   selectOne :(tb_name, id) => {
      return `SELECT * FROM ${tb_name} WHERE id=${id}`
   },
   insert: (tb_name)=>{
      return `INSERT INTO ${ tb_name } SET ?`
   }
}

const alterTable = {
   add: (tb_name, obj = { col_name, col_type, required: false, pr_key: false, auto_inc: false})=>{
      return `
      ALTER TABLE ${tb_name} ADD ${obj.col_name} ${obj.col_type} ${obj.required ? "NOT NULL": ''} 
      ${pr_key ? "PRIMARY KEY" : ""} ${auto_inc ? "AUTO_INCREMENT" : ""}
      `
   },

   change: (tb_name, old_col ,obj = {new_col, type , required:false, pr_key:false, auto_inc:false })=>{
      return `ALTER TABLE ${tb_name} CHANGE ${old_col} ${obj.new_col} ${obj.type} ${obj.required ? "NOT NULL" : ""}
      ${obj.pr_key ? "PRIMARY KEY" : ""} ${obj.auto_inc ? "AUTO_INCREMENT" : ""}
      `
   },

   modify: (tb_name, obj = { col, type, required: false, pr_key: false, auto_inc: false })=>{
      return `ALTER TABLE ${tb_name} MODIFY ${obj.col} ${obj.type} ${obj.required ? "NOT NULL" : ""}
      ${obj.pr_key ? "PRIMARY KEY" : ""} ${obj.auto_inc ? "AUTO_INCREMENT" : ""}`
   },
   removeAll:(tb_name)=>{
      return `TRUNCATE TABLE ${tb_name}`
   },
   drop : (tb_name, col)=>{
      return `ALTER TABLE ${tb_name} DROP WHERE ${col}`
   },
   dropRowById: (tb_name, row_id)=>{
      return `DELETE FROM ${tb_name} WHERE id = ${row_id}`
   },
   dropRowByAny : (tb_name, obj = {row_key, row_value}) =>{
      return `DELETE FROM ${tb_name} WHERE ${obj.row_key} = ${obj.row_value}`
   }
}

module.exports = {data, alterTable}