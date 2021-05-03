const express = require("express");


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

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
        console.log(`
        Bacana Matheus!
        
        O que você aprendeu hoje foi:
        ${answers[0]}

        O que me deixou aborrecido? E que eu poderia fazer para melhorar:
        ${answers[1]}

        O que me deixou feliz hoje:
        ${answers[2]}

        Quantas pessoas eu ajudei hoje:
        ${answers[3]}

        Você ajudou ${answers[3]} pessoas hoje! Seja grato pelo dia apesar de tudo!

        Volte amanhã para novas reflexões...
`)
})

/*
const PORT = 5000;
const HOST = '0.0.0.0';
const app = express();

//*Teste curto!
app.get('/', (req, res =>{
    res.send('Hello World!'); 
}));

app.listen(PORT, HOST);

/*
Teste longo (manual)
const test = () => {
    const serverOK = () => {
        if (PORT == 5000){
            console.log("serverOK");     
        }else{
            console.log("!");
        }         
    }
}
*/