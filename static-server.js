var Hapi = require('hapi'), Inert = require('inert'), Path = require('path'),
server = new Hapi.Server(), port = process.env.PORT || 8000;
server.register(Inert, function () {});
server.connection({ port: port });
server.route( { method: 'GET', path: '/{param*}', handler: {
    directory: { path: Path.normalize(__dirname + '/') }
  }
});
server.start(function() { console.log('Visit: http://127.0.0.1:' +port) });
