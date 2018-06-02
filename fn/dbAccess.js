var mysql = require('mysql');

exports.load = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
<<<<<<< HEAD
            password: '',
=======
            password: 'root',
>>>>>>> 1104e8eb901da2014ad57f0108580ce34dd8f59f
            database: 'ibags'
        });

        cn.connect();

        cn.query(sql, function(error, rows, fields) {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }

            cn.end();
        });
    });
}

exports.save = sql => {
    return new Promise((resolve, reject) => {
        var cn = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
<<<<<<< HEAD
            password: '',
=======
            password: 'root',
>>>>>>> 1104e8eb901da2014ad57f0108580ce34dd8f59f
            database: 'ibags'
        });

        cn.connect();

        cn.query(sql, function(error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }

            cn.end();
        });
    });
}