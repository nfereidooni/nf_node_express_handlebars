const db = require( './connection.js' );

// enter functions

function closeORM(){
  return db.close()
}

module.exports = { // function names, 
    closeORM }
