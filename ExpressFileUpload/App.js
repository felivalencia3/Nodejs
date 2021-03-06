 const express = require('express');

  const multer = require('multer');
  const bodyParser = require('body-parser');
  const app = express();
  const port = process.env.PORT || 8081;
  app.use(bodyParser.urlencoded({extended:false}));
  app.use(bodyParser.json());
  app.use('/', express.static(__dirname + '/public'));
  const multerConfig = {

    storage: multer.diskStorage({
      destination: function(req, file, next){
        next(null, './public/photo-storage');
      },
      filename: function(req, file, next){
        console.log(file);
        const ext = file.mimetype.split('/')[1];
        next(null, file.fieldname + '-' + Date.now() + '.'+ext);
      }
    }),
    fileFilter: function(req, file, next){
          if(!file){
            next();
          }
        const image = file.mimetype.startsWith('image/');
        if(image){
          console.log('photo uploaded');
          next(null, true);
        }else{
          console.log("file not supported")
          //TODO:  A better message response to user on failure.
          return next();
        }
    }
  };
  app.get('/', function(req, res){
    res.render('index.html');
  });

  app.post('/upload', multer(multerConfig).single('photo'),function(req, res){

  }
);
  app.listen(port,function(){
    console.log(`Server listening on port ${port}`);
  });
