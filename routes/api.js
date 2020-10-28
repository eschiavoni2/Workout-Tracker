const router = require("express").Router();
const Workout = require("../models/workout");

// no route for homepage
router.post("/api/workouts", (req, res) => {
    Workout.create({})

});


module.exports = router;
