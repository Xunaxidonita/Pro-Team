const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const taskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: "Please give your task a name!",
      maxlength: 140,
    },
    taskText: {
      type: String,
      required: true,
      maxlength: 280,
    },
    assignedTo: {
      type: String,
      maxlength: 20,
    },
    dueDate: {
      type: Date,
      get: (timestamp) => dateFormat(timestamp),
    },
    status: {
      type: String,
      maxlenght: 20,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Task = model("Task", taskSchema);

module.exports = Task;
