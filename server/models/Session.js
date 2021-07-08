const { Schema, model } = require("mongoose");

const sessionSchema = new Schema(
  {
    _id: {
      type: String,
      required: "Please give your project a name!",
      minlength: 1,
      maxlength: 280,
    },
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Session = model("Session", sessionSchema);

module.exports = Session;
