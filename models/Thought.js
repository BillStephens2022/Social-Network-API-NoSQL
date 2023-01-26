const { Schema, model } = require('mongoose');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: { 
        type: String, 
        required: true,
        minlength: 1,
        maxlength: 280
    },
   createdAt: { 
        type: Date,
        default: Date.now,
    },
    username: { 
        type: String,
        required: true
    },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'reaction' }],
  },
  {
    // Indicates that virtuals to be included with our response
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual called reactionCount that retrieves the length of the user's friends array field on query.
thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });


// Initialize User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;