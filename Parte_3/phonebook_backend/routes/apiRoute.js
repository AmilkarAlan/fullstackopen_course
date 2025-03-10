const express = require("express");
const api = express.Router();
const fs = require("fs");
const path = require("path");
//middleware
const dataComprobation = (req, res, next) => {
    const { name, number } = req.body;
    if (!name) {
        return res.status(400).json({ error: "The name is required" });
    }
    if (!number) {
        return res.status(400).json({ error: "The number is required" });
    }

    fs.readFile(path.join(__dirname, "../db.json"), "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading the file" });
        }

        let persons = JSON.parse(data);

        const formatNumber = (num) => {
            return num.split("-").join("").toString();
        };


        const existingPersonByName = persons.find((person) => person.name.toLowerCase() === name.toLowerCase());
        if (existingPersonByName) {
            return res.status(400).json({ error: "The name has been registered", data: existingPersonByName });
        }

        const existingPersonByNumber = persons.find((person) => formatNumber(person.number) === formatNumber(number));
        if (existingPersonByNumber) {
            return res.status(400).json({ error: "The number has been registered", data: existingPersonByNumber });
        }

        next();
    });
};

// peticions
api.get("/persons", (req, res) => {
    fs.readFile(path.join(__dirname, "../db.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading the file");
            return;
        }
        res.send(JSON.parse(data));
    });
});
api.get("/persons/:id", (req, res) => {
    const { id } = req.params
    fs.readFile(path.join(__dirname, "../db.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading the file");
            return;
        }
        const persons = JSON.parse(data);
        const person = persons.find(person => person.id === Number(id));
        if (!person) {
            res.send("It's the end of the list, add new numbers")
        }
        res.send(person);
    });
});
api.delete("/persons/:id", (req, res) => {
    const { id } = req.params
    fs.readFile(path.join(__dirname, "../db.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading the file");
            return;
        }
        let persons = JSON.parse(data, (key, value) => {
            return key === 'id' ? Number(value) : value;
        });
        const newList = persons.filter(person => Number(person.id) !== Number(id));
        fs.writeFile(path.join(__dirname, "../db.json"), JSON.stringify(newList, null, 2), (err) => {
            if (err) {
                res.status(500).send("Error writing to the file");
                return;
            }
            return res.send(newList);
        });
    });

});
api.post("/persons", dataComprobation, (req, res) => {
    let personData = req.body;

    fs.readFile(path.join(__dirname, "../db.json"), "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading the file" });
        }
        let persons = JSON.parse(data, (key, value) => {
            return key === 'id' ? Number(value) : value;
        });
        const id = persons.length ? persons[ persons.length - 1 ].id + 1 : 1;
        const person = { id, ...personData };
        persons.push(person);
        fs.writeFile(path.join(__dirname, "../db.json"), JSON.stringify(persons, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: "Error writing to the file" });
            }
            return res.status(201).json(person);
        });
    });

});

module.exports = api