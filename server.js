var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "/views/index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "/views/about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "/views/contact.html");
});

router.get("/public/css/main.css",function(req,res){
  res.sendFile(path + "/public/css/main.css");
});
router.get("/public/css/jquery.jscrollpane.css",function(req,res){
  res.sendFile(path + "/public/css/jquery.jscrollpane.css");
});
router.get("/public/js/jquery.typeahead.js",function(req,res){
  res.sendFile(path + "/public/js/jquery.typeahead.js");
});
router.get("/public/js/jquery.jscrollpane.min.js",function(req,res){
  res.sendFile(path + "/public/js/jquery.jscrollpane.min.js");
});

router.get("/public/js/bootstrap-datepicker.js",function(req,res){
  res.sendFile(path + "/public/js/bootstrap-datepicker.js");
});
router.get("/public/css/datepicker.css",function(req,res){
  res.sendFile(path + "/public/css/datepicker.css");
});


router.get("/public/js/rision.js",function(req,res){
  res.sendFile(path + "/public/js/rision.js");
});


app.use("/",router);

app.use(express.static('public'))
app.use(express.static('files'))



app.use("*",function(req,res){
  res.sendFile(path + "/views/404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
