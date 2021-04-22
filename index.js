/**/
const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?",
]

const ask = ( index = 0 ) => {
    process.stdout.write(questions[index] + "\n \n \n")
}

ask()







/* const express = require("express");

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello World!'); 
});

app.listen(PORT, HOST);

*/