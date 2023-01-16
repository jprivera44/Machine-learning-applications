

//require statements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

//setting up the first route
app.post('/', (req, res) => {
  res.json({
     message: 'Hello World!' 
  });
});

//app listen on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

