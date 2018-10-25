//Require 'path' for index.html
const path = require('path');

//Pass in 'app' for Express
module.exports = function (app) {
   
    app.get('/doc', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/doc.html'));
    });

    app.get('/doc/:id', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/doc.html'));
    });

     //Default to index.html
     app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

}; 
