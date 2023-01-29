const { Schema, Types } = require('mongoose');

// Schema to create Thought model
const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: { 
        type: String,
        required: true,
        maxlength: 280
    },
    username: { 
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
  },
  {
    // Indicates that virtuals to be included with our response
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;