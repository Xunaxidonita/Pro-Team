const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: "Please give your project a name!",
      minlength: 1,
      maxlength: 280,
    },

    description: {
      type: String,
      require: "Please provide a description for you project",
      minlength: 1,
      maxlength: 1024,
    },
    dueDate: {
      type: Date,
      get: (timestamp) => dateFormat(timestamp),
    },

    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],

    status: {
      type: String
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
projectSchema.virtual("taskCount").get(function () {
  return this.tasks.length;
});

const Project = model("Project", projectSchema);

module.exports = Project;
