const db = require( './connection.js' );

class orm {

  constructor(){}

  selectAll() {
    const query = `SELECT * FROM burgers `+ (id ? `WHERE id = ?` : '' )
    return db.query(query)
  }

  insertOne(burgerName) {
    const query = `INSERT INTO burgers (burger_name,devoured) VALUES (?,?)`
    return db.query(query, [burgerName, false])
  }

  updateOne(id, devoured) {
    const query = `INSERT INTO burgers(burger_name,devoured) WHERE id = ?`
    return db.query(query, [devoured ? 1 : 0, id])
  }

  closeORM(){
    return db.close()
  }

}



module.exports = orm
