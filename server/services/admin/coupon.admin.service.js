const Coupon = require("../../models/Coupon");
const ApiError = require("../../utils/ApiError");

const normalizeCode = (code) => String(code || "").trim().toUpperCase();

const listCoupons = async (query) => {
  const page = Number(query.page || 1);
  const limit = Number(query.limit || 10);
  const skip = (page - 1) * limit;

  const filter = {};
  if (query.isActive !== undefined) filter.isActive = query.isActive;
  if (query.q) filter.code = { $regex: query.q, $options: "i" };

  const [items, total] = await Promise.all([
    Coupon.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Coupon.countDocuments(filter),
  ]);

  return {
    items,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};

const getCouponById = async (id) => {
  const coupon = await Coupon.findById(id);
  if (!coupon) throw new ApiError(404, "Coupon not found");
  return coupon;
};

const createCoupon = async (payload) => {
  const data = { ...payload, code: normalizeCode(payload.code) };
  const exists = await Coupon.findOne({ code: data.code });
  if (exists) throw new ApiError(400, "Coupon code already exists");
  return Coupon.create(data);
};

const updateCouponById = async (id, payload) => {
  const update = { ...payload };
  if (update.code) update.code = normalizeCode(update.code);

  if (update.code) {
    const exists = await Coupon.findOne({ _id: { $ne: id }, code: update.code });
    if (exists) throw new ApiError(400, "Coupon code already exists");
  }

  const coupon = await Coupon.findByIdAndUpdate(id, update, {
    returnDocument: "after",
    runValidators: true,
  });
  if (!coupon) throw new ApiError(404, "Coupon not found");
  return coupon;
};

const deleteCouponById = async (id) => {
  const coupon = await Coupon.findById(id);
  if (!coupon) throw new ApiError(404, "Coupon not found");
  await Coupon.findByIdAndDelete(id);
  return { message: "Coupon deleted successfully" };
};

module.exports = {
  listCoupons,
  getCouponById,
  createCoupon,
  updateCouponById,
  deleteCouponById,
};
