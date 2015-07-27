var express = require('express');
var router = express.Router();

//MySQL
var regis = require("../repository/register");

/* GET users listing. */
router.get("/", function(req, res) {

  //ต่อ database MSSQL
  //var sql = "SELECT * FROM TestRegister";
  //query(sql, function(data){
    //console.log(data);
    //res.send("OK");


//============================== MySQL =========================================
  //ต่อ database MySQL
  regis.connect(function(err){
    regis.loadRegis(0, function(err_query, data){
      res.json(data);
    });
  });
  //res.send("Version :"+regis.version);


  //res.sendfile("./public/html/register_form.html");
  //res.send("Hello");
});

//------------------------------------------------------------------------------
//SELECT
router.get("/ID/:id", function(req,res){
  var id = req.params.id;
  regis.connect(function(err){
    regis.loadRegis(id, function(err_query, data){
      if(data.length>0 && isNumber(id)==true){
        res.json(data);
      }else {
        res.send("Data Not Found.");
      }
    });
  });
});
//------------------------------------------------------------------------------
router.get("/new/:tname/:fname/:lname/:gender", function(req, res){
  var tname = req.params.tname;
  var fname = req.params.fname;
  var lname = req.params.lname;
  var gender = req.params.gender;

  regis.connect(function(err){
    regis.insertRegis(tname, fname, lname, gender, function(err_query, id){
      res.send("ID :"+id+" Insert Done!");
    });
  });
});
//------------------------------------------------------------------------------

function isNumber(obj) { return !isNaN(parseFloat(obj)) }


//============================== MySQL =========================================
module.exports = router;




/*
//============================== MSSQL =========================================
//------------------------------------------------------------------------------
function query(sql, callback){
  var mssql = require("mssql");

  var config = {
    user : "root",
    password : "1234",
    database : "SRSRegister",
    server : "BEEBE-WS-PC"
  }

  //----------------------------------------------------------------------------

  mssql.connect(config, function(err_connect){
    var cmd = new mssql.Request();
    cmd.query(sql, function(err_query, data){
      callback(data);
    });
  });
  //----------------------------------------------------------------------------
}
//============================== MSSQL =========================================
*/

//module.exports = router;
