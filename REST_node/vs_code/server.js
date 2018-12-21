const express = require("express"),
bodyparser = require("body-parser"),
headers = require("cors"),
app = express(),
Sequelize = require("sequelize"),
database = new Sequelize('RecipeDB', 'root', 'castro03', {
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
const Question = database.define('recipe', {
    Question: {type: Sequelize.TEXT},
    A: {type: Sequelize.TEXT},
    B: {type: Sequelize.TEXT},
    C: {type: Sequelize.TEXT},
    Answer: {type: Sequelize.TEXT}
});
app.get("/",urlencoded,(req,res,next) => {
    
})