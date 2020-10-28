// serve up HTML files here
const router = require("express").Router();
var path = require("path");

    // Each of the below routes just handles the HTML page that the user gets sent to.
    router.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // where users can enter new exercise to the db
    router.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // where all stats in the db are displayed
    router.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });


module.exports = router;
