const express = require('express')
const { query } = require('../database/dbConfig')
const route = express.Router()
const pool = require('../database/dbConfig')
const {data, alterTable} = require("../database/helpers")
const db = process.env.DB_TABLE

route.get("/",(req,res)=>{
  pool.query(data.selectAll(db), (err,rows)=>{
     if(err) throw err;
      res.json(rows)
  })
})


route.post("/", (req,res)=>{
   const { title, description, color, background, img} =req.body
   const obj = {
      title,
      description,
      color,
      background,
      img
   }

   pool.query(data.insert(db), obj, (err) => {
      if (err) throw err
      res.redirect("/")
   })
})

route.get("/setrandom", (err,res)=>{  
   
      const obj = {
         title: `TITLE `,
         description: `This is a card description 6`,
         color: "#B9E",
         background: "C2E",
         img: null
      }

      pool.query(data.insert(db), obj, (err) => {
         if (err) throw err
         res.redirect("/")
      })
   
})

route.get("/remove/:id", (req,res)=>{
   const id = req.params.id
   console.log(id)
   pool.query(alterTable.dropRowById(db, id), (err)=>{
      if(err) throw err
      res.redirect("/")
   })
})


route.get('/modify', (req,res)=>{

   const obj = {
      col: "id",
      type: "INT",
      required: true,
      pr_key: false,
      auto_inc: true
   }
   pool.query(alterTable.modify(db ,obj),(err)=>{
      if(err) throw err
      res.redirect("/")
   })
})

route.get("/deleteall", (req,res)=>{
   pool.query(alterTable.removeAll(db),(err)=>{
      if(err) throw err
      res.redirect("/")
   })
})

module.exports = route