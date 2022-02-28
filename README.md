# basic-api-server

api server for data base handling 

### steps:
* created the server and middlewares.
* created the database.
* created two models and index.js
* in index.js requiring the sequelize (which is a package the ORM tool uses for sending request to the data base).
* also in index.js(model) i required these two moldes(tables) and the dotenv , the two models requiring to export them and the same for sequelize (it also to be exported) and also to connect it with the database url using **(  let sequelize = new Sequelize(url of the database, sequelizeOptions))**.

* and then i created routers folder which has food and clothes routers.
* in each router file i required the express itself. Also, the model which i want to crea routes for it, and the express.Router() method.
* then i created the whole routers for each model.
* then i required the router for each path in server.js and called them in it using app.use(router requiring name).
* them i connected (sync()) the express server not to work unless the postgress server is alive (the database is accessible).


[pull request link](https://github.com/islam-Attar/basic-api-server/pull/1)

[Heroku link](https://islam-basic-api-server.herokuapp.com/)
