const mysql = require("mysql");


const defaultConnecton = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1booleanbros',
    database: 'burgers_db'
};

const connectionString = process.env.JAWSDB_URL || defaultConnecton;

class Database {
	constructor(setting) {
		this.connection = mysql.createConnection(setting);
	}

	query(sql, args=[]) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, rows) => {
				if (err) {
					return reject(err)
				}
				resolve(rows)
				
			}); 
		});
	};

	close() {
		return new Promise((resolve, reject) => {
			this.connection.end(err => {
				if (err) {
					return reject(err)
				}
				resolve()
			});
		});
		
	};

};

const db = new Database(connectionString);

module.exports = db;

