var http = require('http');
var app = require('./config/express')();
const url = 'mongodb://dougovski:1409@clusterdhaps-shard-00-00.rzyac.mongodb.net:27017,clusterdhaps-shard-00-01.rzyac.mongodb.net:27017,clusterdhaps-shard-00-02.rzyac.mongodb.net:27017/ifsp?ssl=true&replicaSet=atlas-z0ehqd-shard-0&authSource=admin&retryWrites=true&w=majority';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});
