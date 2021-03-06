const express = require('express');
const cors = require('cors');
const os = require('os');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const session = require('express-session');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

const app = express();
mongoose.promise = global.Promise;
process.env.NODE_ENV = 'development';
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(
  session({
    secret: 'passport-tutorial',
    cookie: {
      maxAge: 60000
    },
    resave: false,
    saveUninitialized: false
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.get('/api/getUsername', (req, res) => res.send({
  username: os.userInfo().username
}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/dist`));
mongoose.connect('mongodb://localhost/auth', {
  useNewUrlParser: true
});
if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}
mongoose.set('debug', true);
require('./models/User');
require('./models/Weight');
require('./config/passport');
app.use(require('./routes'));

app.listen(8081, () => console.log('Server running on http://localhost:8081/'));