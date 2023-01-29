//Original code from Adrian Twarog
//https://www.youtube.com/watch?v=bB7xkRsEq-g&list=WL&index=19&t=1419s

//for some reason we can't use import statement, since its not set up
//import { Configuration, OpenAIApi } from "openai";

//instead a const for configuration needs to be created, which included a decomposition of the import statement
const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

//require statements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-lsOe0oGbmP2N8KA4QjeP2jD2",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
//skipping for now for some reason
//const response = await openai.listEngines();


app.use(bodyParser.json());
app.use(cors());

//setting up the first route
app.post('/', async (req, res) => {
  
   const { message } = req.body;
   //
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 20,
      temperature: 0,
    });

    //output the response to the console
    console.log(response.data);
    //
    if (response.data.choices[0].text){
      res.json({message: response.data.choices[0].text});
    }


});

//app listen on port 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

