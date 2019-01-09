const express = require("express"),
    fs = require("fs"),
    axios = require("axios"),
    app = express(),
    id = "6f97a0c8",
    key = "594a83f49bcf2dcfd26342a98f44e95d";
const multer = require('multer'),
    cloudinary = require("cloudinary");
const upload = multer({
    dest: 'uploads/'
});
cloudinary.config({
    cloud_name: 'felipe-valencia',
    api_key: '816872693333612',
    api_secret: 'piqndQ3cqPaeR6Vcz64UB_Gp7xU'
});
const bodyparser = require("body-parser");
const Sequelize = require("sequelize");
const database = new Sequelize('RecipeDB', 'root', 'castro03', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
const Recipe = database.define('recipe', {
    name: {
        type: Sequelize.STRING
    },
    time: {
        type: Sequelize.DOUBLE
    },
    ingredients: {
        type: Sequelize.TEXT
    },
    directions: {
        type: Sequelize.TEXT
    },
    author: {
        type: Sequelize.STRING
    }
});
const urlencodedparser = bodyparser.urlencoded({
    extended: false
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post("/recipe", urlencodedparser, (req, res, next) => {
    const name = req.body.name || "Recipe Name Here",
        time = req.body.time,
        ingredients = req.body.ingredients || "Ingredients here",
        directions = req.body.directions || "Step by step directions",
        author = req.body.author || "Anonymous";
    Recipe.sync({
        force: false
    }).then(() => {
        const newInstance = Recipe.create({
            name: name,
            time: time,
            ingredients: ingredients,
            directions: directions,
            author: author
        });
        newInstance
            .then((recipe) => {
                res.send(recipe.dataValues)
            });

        return newInstance
    });
});
app.post("/")
app.get("/recipes", urlencodedparser, (req, res, next) => {
    Recipe.findAll().then((recipe) => {
        res.send(recipe)
    })
});
app.get("/recipe", (req, res, next) => {
    const search = req.query.q;
    axios.get(`http://api.edamam.com/search`, {
            params: {
                q: search,
                app_id: id,
                app_key: key
            }
        })
        .then(function (response) {
            let payload = [];
            for (let i = 0; i < response.data.hits.length; i++) {
                const recipe = response.data.hits[i].recipe,
                    Recname = recipe.label,
                    Recingredient = recipe.ingredientLines,
                    Recurl = recipe.url,
                    Recimage = recipe.image;
                const package_to_send = {
                    name: Recname,
                    ingredients: Recingredient,
                    url: Recurl,
                    image: Recimage
                };
                payload.push(package_to_send)
            }
            res.send(payload)
        })
        .catch(function (error) {
            console.log(error);
        })
});
app.post('/upload', upload.single("image"), urlencodedparser, function (req, res, next) {
    const key = req.body.name;
    const imageKey = req.file.filename;

    cloudinary.v2.uploader.upload(`./uploads/${imageKey}`, {
            public_id: key
        },
        function (error, result) {
            console.log(result, error)
        });
    fs.unlink(`./uploads/${imageKey}`, (err => {
        if (err) throw err;
        res.status(200).send()
    }))
});
app.get("/image", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
const server = app.listen(8081, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});