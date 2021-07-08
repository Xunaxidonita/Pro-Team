const { Schema, model } = require("mongoose");

const sessionSchema = new Schema(
  {
    token: {
      type: String,
      required: "Please give your session a token!",
      minlength: 1,
      maxlength: 280,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Session = model("Session", sessionSchema);

module.exports = Session;
