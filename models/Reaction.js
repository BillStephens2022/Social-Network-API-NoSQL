const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/formatDate');

// Create Reaction Schema
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
        get: formatDate
    }
  },
  {
    // Indicates that virtuals to be included with our response
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

module.exports = reactionSchema;