const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxLength: [200, "Title tối đa 200 ký tự"],
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    thumbnail: { type: String, default: null },
    tags: [{ type: String, trim: true, lowercase: true }],
    views: { type: Number, default: 0 },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true },
);

blogSchema.index({ isActive: 1, createdAt: -1 });
blogSchema.index({ title: "text", tags: "text" });

module.exports = mongoose.model("Blog", blogSchema);
