const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", async function(req, res) {
    const result = await burger.showBurgers();
    res.render("index", { burgers: result })
});

router.post("/", async function(req, res) {
    burgerName = req.body.burger_name
    const result = await burger.submitBurger(burgerName)
    res.send({result})
});

router.put("/:id", async function(req, res) {
    const id = req.params.id
    const devoured = req.body.devoured
    const result = await burger.devourBurger(id, devoured)
    res.json(result)
});

module.exports = router;