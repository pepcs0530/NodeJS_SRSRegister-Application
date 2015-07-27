function Register(){
  this.version = "0.0.0.1";

  //connect MySQL
  var mysql = require("mysql");
  /*var config ={
    host : "localhost",
    user : "root",
    password : "1234",
    database : "srsregister"
  }*/
  
  //connect ClearDB MySQL
  var config ={
    host : "us-cdbr-iron-east-02.cleardb.net",
    user : "b698bcd90bd2cd",
    password : "43a5294d",
    database : "ad_407152d31691918"
  }
    
  var db = "null";

  //----------------------------------------------------------------------------
  //set connetion
  this.connect = function(callback){
    db = mysql.createConnection(config);
    db.connect(function(err){
      if(err) console.log(err);
      callback(err);
    });
  }
  //----------------------------------------------------------------------------
  //select
  this.loadRegis = function(id, callback){
    var sql = "select * from testregister"; //select all
    if(id>0)
      sql = "select * from testregister where id = "+id; //select where id
    db.query(sql, function(err_query, data){
      if(err_query) console.log(err_query);
      callback(err_query,data);
    });
  }
  //----------------------------------------------------------------------------
  //insert
  this.insertRegis = function(tname, fname, lname, gender, callback){
    var sql = "insert into testregister(tnameTH, fnameTH, lnameTH, gender)"
    +" values('"+tname+"', '"+fname+"', '"+lname+"', '"+gender+"')";

    db.query(sql, function(err, data){
      if(err) console.log(err);
      callback(err, data.insertId);
    });
  }
  //----------------------------------------------------------------------------
}

module.exports = new Register();
