const express = require ('express');
const bodyParser = require ('body-parser');
// const path = require ('path');

const app = express();
const port = 9000;

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "")));

// something from our classwork
//  app.get('/data', (req, res) => res.json({success: true, data: [1, 2, 3, 4,]}));
//  app.post('/postData', (req, res) => res.json({success: true, data: req.body}));
 // app.use('/', (req, res) => res.sendFile(path.join(__dirname, 'static/build/index.html')));
// -----------------------------------------------------

app.listen(port, () => console.log( `Server listening on port ${port}`));