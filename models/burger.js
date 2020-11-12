const orm = require("../config/orm.js");
const ORM = new orm();

class burger {
    constructor() {}

    showBurgers() {
        return ORM.selectAll()
    }

    devourBurger(id, devoured) {
        return ORM.updateOne(id, devoured)
    }

    submitBurger(burgerName) {
        return ORM.insertOne(burgerName)
    }
};

module.exports = burger;