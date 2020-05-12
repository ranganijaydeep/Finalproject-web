var http = require('http');
var fs = require('fs');
const mongodb = require('mongodb');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('Whoops! file is not find ');
        } else {
            response.write(data);
        }
        response.end();

    });
};
async function db_setup() {
    const link = "mongodb+srv://Kura:gura2010@cluster-mealboxapp-qe3ie.mongodb.net/test?retryWrites=true&w=majority"
    const DB_connection = new mongodb(link);
    try {
        await DB_connection.connect();

        await listDatabases(DB_connection);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
db_setup().catch(console.error);

async function listDatabases(DB_connection) {
    databasesList = await DB_connection.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


http.createServer(handleRequest).listen(27017);