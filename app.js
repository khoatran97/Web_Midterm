var express = require('express');
var hbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var wnumb = require('wnumb');

var handleLayoutMDW = require('./middle-wares/handleLayout'),
    handle404MDW = require('./middle-wares/handle404'),
    restrict = require('./middle-wares/restrict');

var guestController = require('./controllers/guestController');
var accountController = require('./controllers/accountController');
var adminController = require('./controllers/adminController');

var app = express();

app.engine('hbs', hbs({
	defaultLayout: 'main',
	helpers: {
        section: express_handlebars_sections(),
        number_format: n => {
            var nf = wnumb({
                thousand: ','
            });
            return nf.to(n) + ' ₫';
        }
    }
}));

app.set('view engine', 'hbs');

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var sessionStore = new MySQLStore({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'ibags',
    createDatabaseTable: true,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
});

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

app.use(handleLayoutMDW);

app.use('/', guestController.router);
app.use('/account', accountController.router);
app.use('/admin', restrict.admin, adminController.router);

app.use(handle404MDW);

app.listen(3000);