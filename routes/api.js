const router = require("express").Router();
const { response } = require("express");
const { db } = require("../models/workout");
const Workout = require("../models/workout");

// no route for homepage


router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        {
            
        }
    )
}



module.exports = router;
