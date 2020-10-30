const router = require("express").Router();
const { response } = require("express");
const { db } = require("../models/workout");
const Workout = require("../models/workout");
var path = require("path");


// no route for homepage

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {exercises: body}
        }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});
// router.get("/api/workouts", (req, res) => {
//     Workout.find({}, (error, data) => {
//         if (error) {
//             res.send(error);
//         }else {
//             res.json(data);
//         }
//     });
// });

router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
          console.log(dbWorkout)
        res.json(dbWorkout);
      })
      .catch(err => {
          console.log(err)
        res.json(err);
      });
  });

module.exports = router;
