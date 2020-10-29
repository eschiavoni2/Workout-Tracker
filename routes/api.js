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
    Workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", ({ query }, res) => {
    Workout.find({ day: { $gte: query.start, $lte: query.end } })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {exercise: body}
        }
    )
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;
