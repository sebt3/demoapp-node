const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection'),
      _ = require('lodash');

const configDefault = {
    "database": {
	"port": 3306,
	"database": "demo_node_app",
	"host": "localhost",
	"user": "demo",
	"password": "demo"
    }
}
const configFile = require('../config.json');
const config = _.merge(configDefault, configFile);


const app = express();

app.set('version', '1.0.0');

// importing routes
const customerRoutes = require('./routes/customer');
const apiRoutes = require('./routes/api');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, config.database, 'pool'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', customerRoutes);
app.use('/api', apiRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
