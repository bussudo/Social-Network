const { Schema, model } = require("mongoose");
const { dateFormatter } = require("../utils/format.js");

// Schema to create a reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (Timenow) => dateFormatter(Timenow),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.export = reactionSchema;
