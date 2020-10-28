const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
    type: {
      type: String,
      trim: true,
      required: "Enter exercise name"
    },
    duration: 
    {
        type:
    }
  ];
});

const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;