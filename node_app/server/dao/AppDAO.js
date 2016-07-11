"use strict";

var mysql = require("mysql");

module.exports = class AppDAO {
    connect(){
        // First you need to create a connection to the db
        this.con = mysql.createConnection({
          host: "localhost",
          user: "a",
          password: "a",
          database: "sitepoint"
        });

        this.con.connect(function(err){
          if(err){
            console.log('Error connecting to Db: ' + JSON.stringify(err) );
            return;
          }
          console.log('Connection established');
        });

        this.con.end(function(err) {
          // The connection is terminated gracefully
          // Ensures all previously enqueued queries are still
          // before sending a COM_QUIT packet to the MySQL server.
        });

    }

    findRestaurant(){
        this.con.query('SELECT * FROM employees',function(err,rows){
          if(err) throw err;

          console.log('Data received from Db:\n');
          console.log(rows);
        });
    }


    testPromise() {

        // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
        var p1 = new Promise(
            // The resolver function is called with the ability to resolve or
            // reject the promise
            function(resolve, reject) {
                // This is only an example to create asynchronism
                 resolve(1);
            }
        );

        // We define what to do when the promise is resolved/fulfilled with the then() call,
        // and the catch() method defines what to do if the promise is rejected.
        p1.then(
            // Log the fulfillment value
            function(val) {
                console.log('Resolve' + 1);
            })
        .catch(
            // Log the rejection reason
            function(reason) {
                console.log('Handle rejected promise ('+reason+') here.');
            });
    }
}

