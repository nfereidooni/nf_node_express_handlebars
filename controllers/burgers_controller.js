const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const hbObject = {
            burgers: data
        };
        res.render('index', hbObject);
    });
});


router.post("/", function(req, res) {

// enter code

});

router.put("/:id", function(req, res) {

// enter code

});

module.exports = router;