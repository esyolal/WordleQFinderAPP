import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = String(date.getDate()).padStart(2, '0');

const bugun = year + "-" + month + "-" + day;
console.log(bugun);
const jsonURL = `https://www.nytimes.com/svc/wordle/v2/${bugun}.json`;

app.get("/",async (req,res)=>{
    const result = await axios.get(jsonURL);
    const data = result.data;
    const solution = data.solution;
    res.render("index.ejs",{solution:JSON.stringify(solution)});
});

app.listen(port,()=>{
    console.log(`Listening on port:${port}`);
});

/* fetch(jsonURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
console.log('Solution:',data.solution);
  })
  .catch(error => {
    console.error('Hata:', error);
  });

 */