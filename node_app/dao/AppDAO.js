"use strict";

var mysql = require("mysql");

module.exports = class AppDAO {

    findRestaurant(){
        // First you need to create a connection to the db
        var con = mysql.createConnection({
          host: "localhost",
          user: "jay",
          password: "jay"
        });

        con.connect(function(err){
          if(err){
            console.log('Error connecting to Db: ' + JSON.stringify(err) );
            return;
          }
          console.log('Connection established');
        });

        con.end(function(err) {
          // The connection is terminated gracefully
          // Ensures all previously enqueued queries are still
          // before sending a COM_QUIT packet to the MySQL server.
        });

    }

}

