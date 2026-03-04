const User = require("../../models/User");
const Order = require("../../models/Order");

const getOverview = async (query) => {
  const from = query.from || new Date(0);
  const to = query.to || new Date();

  const baseFilter = { createdAt: { $gte: from, $lte: to } };

  const [totalUsers, totalOrders, nonCancelledOrders, revenueAgg] = await Promise.all([
    User.countDocuments({ isActive: true }),
    Order.countDocuments(baseFilter),
    Order.countDocuments({ ...baseFilter, status: { $ne: "Cancelled" } }),
    Order.aggregate([
      { $match: { ...baseFilter, status: { $ne: "Cancelled" } } },
      { $group: { _id: null, revenue: { $sum: "$pricing.total" } } },
    ]),
  ]);

  const revenue = revenueAgg[0]?.revenue || 0;

  return {
    range: { from, to },
    totalUsers,
    totalOrders,
    nonCancelledOrders,
    revenue,
  };
};

module.exports = { getOverview };
