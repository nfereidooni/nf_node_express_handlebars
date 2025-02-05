const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const router = express.Router();
const path = require("path");
const Burger = new (require('../models/burger.js'))();

router.get("/", async function(req, res) {
    try {
    const result = await Burger.listBurgers();  
    res.render("index", { burgers: result });
    } catch (error) {
        console.error(error)
    }
});

router.post("/api/burgers",async function(req,res){
    try {
    const burgerName = req.body.burger_name;
    const result = await Burger.submitBurger(burgerName);
    res.send({result});
    } catch (error) {
        console.error(error)
    }
});

router.put("/api/burgers/:id", async function(req,res){
    try {
    const burgerID = req.params.id;
    //console.log(burgerID);
    const devoured = req.body.devoured;
    const result = await Burger.devourBurger(burgerID, devoured);
    res.json(result);
    } catch (error) {
        console.error(error)
    }
});

router.delete("/api/burgers/:id", async function(req, res) {
    try {
      const burgerID = req.params.id;
      const result = await Burger.deleteBurger(burgerID);
  
      if (result.affectedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
});

module.exports = router;