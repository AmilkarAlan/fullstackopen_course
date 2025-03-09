const express = require("express");
const app = express();
const PORT = 3001;
const fs = require('fs');
const path = require('path');
const routes = require("./routes");
const morgan = require("morgan");

app.use(express.json());
morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
app.use("/", routes);
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}, http://localhost:${PORT}`);

});
