const express = require("express");
const info = express.Router();
const fs = require("fs");
const path = require("path");

info.get("/", (req,res)=>{
    fs.readFile(path.join(__dirname, "../db.json"), "utf8", (err, data) => {
        if (err) {
          res.status(500).send("Error reading the file");
          return;
        }
    
        const db = JSON.parse(data);
        const numberOfPersons = db.length;
        const currentDate = new Date();
    
        const infoMessage = `
          <p>Phonebook has info for ${numberOfPersons} people</p>
          <p>${currentDate}</p>
        `;
    
        res.send(infoMessage);
      });
})
module.exports = info