const mongoose = require("mongoose");

const blogCommentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    content: {
      type: String,
      required: [true, "Comment content is required"],
      trim: true,
      minLength: [2, "Comment tối thiểu 2 ký tự"],
      maxLength: [500, "Comment tối đa 500 ký tự"],
    },
    isApproved: { type: Boolean, default: false },
  },
  { timestamps: true },
);

blogCommentSchema.index({ blog: 1, isApproved: 1, createdAt: -1 });
blogCommentSchema.index({ isApproved: 1, createdAt: -1 });

module.exports = mongoose.model("BlogComment", blogCommentSchema);
