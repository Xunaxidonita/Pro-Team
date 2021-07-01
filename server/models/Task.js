const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const taskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: true,
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
        get: timestamp => dateFormat(timestamp)

        
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

taskSchema.virtual('taskCount').get(function() {
    return this.tasks.length;
  });
  
  const Task = model('Task', taskSchema);

module.exports = taskSchema;
