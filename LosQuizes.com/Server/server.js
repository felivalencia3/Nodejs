const express = require("express"),
bodyparser = require("body-parser"),
app = express(),
Sequelize = require("sequelize"),
database = new Sequelize('QuizDB', 'root', 'castro03', {
    host: 'localhost', dialect: 'mysql',
    operatorsAliases: false,
    pool: {max: 5, min: 0, acquire: 30000, idle: 10000},
}),
urlencoded = bodyparser.urlencoded({extended:false});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const Question = database.define('Questions', {
    Teacher: {type: Sequelize.STRING},
    Question: {type: Sequelize.TEXT},
    A: {type: Sequelize.TEXT},
    B: {type: Sequelize.TEXT},
    C: {type: Sequelize.TEXT},
    Answer: {type: Sequelize.TEXT}
});
app.get("/",urlencoded,(req,res,next) => {
    res.redirect("http://localhost:3000")
})
app.post("/new",urlencoded,(req,res) => {
    const teacher = req.body.teacher,
    question = req.body.question,
    optionA = req.body.a,
    optionB = req.body.b,
    optionC = req.body.c,
    answer = req.body.answer
    Question.sync({force: false}).then(() => {
        return Question.create({
            Teacher: teacher,
            Question: question,
            A: optionA,
            B: optionB,
            C: optionC,
            Answer: answer
        })
      });
      res.status(200).send(true)
})
app.listen(8081,()=>{
    console.log("App is running on port 8081")
})