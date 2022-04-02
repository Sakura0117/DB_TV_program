var express = require("express");
var router = express.Router();
const knex = require("../lib/db");

/* GET home page. */
router.get("/", function (req, res, next) {
  knex("programs")
    .select("*")
    .then(function (programs) {
      console.log(programs);

      res.render("index", {
        title: "TV Program",
        programs,
      });
    })
    .catch(function (err) {
      console.error(err);
      res.render("index", {
        title: "ToDo App",
        programs: [],
      });
    });
});

module.exports = router;
