var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Guess not' });
});
const values = [{id: "1", name: "Felipe"}];
router.get("/names/:id", (req, res,  next) => {

        res.render("index", {title: "Resource Found", content: values})

});
module.exports = router;
