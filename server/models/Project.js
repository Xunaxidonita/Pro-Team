const { Schema, model } = require('mongoose');


const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: 'Please give your project a name!',
      minlength: 1,
      maxlength: 280
    },
    assignedTo: {
      type: String,
      minlength: 1
    },
    dueDate: {
        type: Date,
        get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    tasks: [{
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

projectSchema.virtual('projectCount').get(function() {
  return this.projects.length;
});

const Project = model('Project', projectSchema);

module.exports = Project;
