const mongoose = require("mongoose");
const User = require("../models/User");
const Product = require("../models/Product");
const ApiError = require("../utils/ApiError");

//  Get Wishlist list from User
const getWishlist = async (userId) => {
  const user = await User.findById(userId).populate({
    path: "wishlist",
    select:
      "name slug price discountPrice images averageRating numReviews isActive activeSale",
    match: { isActive: true },
  });

  if (!user) {
    throw new ApiError(404, "User không tồn tại");
  }

  return user.wishlist.filter(Boolean);
};

//  Toggle Wishlist
const toggleWishlist = async (userId, productId) => {
  const productExists = await Product.exists({
    _id: productId,
    isActive: true,
  });
  if (!productExists) {
    throw new ApiError(404, "Sản phẩm không tồn tại");
  }

  const user = await User.findById(userId).select("wishlist");

  const isAlreadyWishlisted = user.wishlist.some((id) =>
    id.equals(new mongoose.Types.ObjectId(productId)),
  );

  let action;
  if (isAlreadyWishlisted) {
    await User.findByIdAndUpdate(userId, { $pull: { wishlist: productId } });
    action = "removed";
  } else {
    await User.findByIdAndUpdate(userId, {
      $addToSet: { wishlist: productId },
    });
    action = "added";
  }

  return { action };
};

module.exports = {
  getWishlist,
  toggleWishlist,
};
