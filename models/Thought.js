const { Schema, Types, model } = require("mongoose");
const { dateFormatter } = require("../utils/format.js");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (Timenow) => dateFormatter(Timenow),
    },
    thoughtText: {
      type: String,
      required: true,
      length: 1 - 280,
    },
    reactions: [reactionSchema],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
