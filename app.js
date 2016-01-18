require("babel/register");
var _ = require('lodash');

//Set Environment for Node's Modules
process.env.NODE_ENV = 'development';

var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ port: 3600 });

server.register({
  register: require('hapi-router'),
  options: {
    routes: './routes.js'
  }
}, function (err) {
  if (err) throw err;
});

server.start(function () {
    console.log('Server running :', server.info);
});
