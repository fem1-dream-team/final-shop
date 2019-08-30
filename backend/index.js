const express = require ('express');
const bodyParser = require ('body-parser');
const path = require ('path');

const app = express();
const port = 9000;

app.use(bodyParser.json());




app.listen(port, () => console.log( `Server listening on port ${port}`));