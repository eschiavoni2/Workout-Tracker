const router = require("express").Router();
const { response } = require("express");
const Workout = require("../models/workout");

// no route for homepage
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});


module.exports = router;
