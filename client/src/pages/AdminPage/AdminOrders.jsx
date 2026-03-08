import React, { useState } from "react";
import AdminModal from "./AdminModal";

export default function AdminOrders() {
  const [orders, setOrders] = useState([
    {
      id: "ORD-9923",
      customer: "Alice Johnson",
      amount: "$398.00",
      date: "Mar 09, 2026",
      status: "Processing",
    },
    {
      id: "ORD-9922",
      customer: "Bob Smith",
      amount: "$49.00",
      date: "Mar 08, 2026",
      status: "Shipped",
    },
    {
      id: "ORD-9921",
      customer: "Charlie Brown",
      amount: "$199.00",
      date: "Mar 05, 2026",
      status: "Delivered",
    },
  ]);

  const [modalState, setModalState] = useState({
    isOpen: false,
    type: "",
    data: null,
  });

  const openModal = (type, data = null) =>
    setModalState({ isOpen: true, type, data });
  const closeModal = () =>
    setModalState({ isOpen: false, type: "", data: null });

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Order ${modalState.data?.id} status updated!`);
    closeModal();
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] font-['Alegreya_Sans:Bold',sans-serif] text-[#0c1950]">
          Sales Orders
        </h1>
      </div>

      <div className="bg-white rounded-[16px] border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100 text-[13px] font-['Lato:Bold',sans-serif] text-gray-500 uppercase tracking-wider">
              <th className="py-4 px-6 rounded-tl-[16px]">Order ID</th>
              <th className="py-4 px-6">Customer</th>
              <th className="py-4 px-6">Amount</th>
              <th className="py-4 px-6">Date</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6 text-right rounded-tr-[16px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-[15px] font-['Lato:Regular',sans-serif] text-[#0c1950]">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50/60 transition-colors">
                <td className="py-4 px-6 font-mono text-[#193495] font-bold">
                  {o.id}
                </td>
                <td className="py-4 px-6 font-medium">{o.customer}</td>
                <td className="py-4 px-6 font-['Lato:Bold',sans-serif]">
                  {o.amount}
                </td>
                <td className="py-4 px-6 text-gray-500">{o.date}</td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-[8px] text-[12px] font-['Lato:Bold',sans-serif] ${
                      o.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : o.status === "Shipped"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right space-x-4">
                  <button
                    onClick={() => openModal("view", o)}
                    className="text-[#193495] hover:opacity-70 font-['Lato:Bold',sans-serif] transition-opacity"
                  >
                    View
                  </button>
                  <button
                    onClick={() => openModal("update", o)}
                    className="text-gray-500 hover:opacity-70 font-['Lato:Bold',sans-serif] transition-opacity"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Details Modal */}
      <AdminModal
        isOpen={modalState.isOpen && modalState.type === "view"}
        onClose={closeModal}
        title={`Order Details - ${modalState.data?.id}`}
        maxWidth="max-w-xl"
      >
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div>
              <p className="text-[12px] text-gray-500 font-['Lato:Bold',sans-serif] mb-1">
                Customer
              </p>
              <p className="text-[15px] text-[#0c1950] font-['Lato:Semibold',sans-serif]">
                {modalState.data?.customer}
              </p>
            </div>
            <div>
              <p className="text-[12px] text-gray-500 font-['Lato:Bold',sans-serif] mb-1">
                Date
              </p>
              <p className="text-[15px] text-[#0c1950] font-['Lato:Regular',sans-serif]">
                {modalState.data?.date}
              </p>
            </div>
            <div>
              <p className="text-[12px] text-gray-500 font-['Lato:Bold',sans-serif] mb-1">
                Total Amount
              </p>
              <p className="text-[15px] text-[#193495] font-['Alegreya_Sans:Bold',sans-serif]">
                {modalState.data?.amount}
              </p>
            </div>
            <div>
              <p className="text-[12px] text-gray-500 font-['Lato:Bold',sans-serif] mb-1">
                Status
              </p>
              <p className="text-[15px] text-[#0c1950] font-['Lato:Regular',sans-serif]">
                {modalState.data?.status}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end mt-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-5 py-2.5 rounded-xl font-['Lato:Bold',sans-serif] text-[#0c1950] bg-gray-100 hover:bg-gray-200 transition-colors text-[14px]"
            >
              Close
            </button>
          </div>
        </div>
      </AdminModal>

      {/* Update Status Modal */}
      <AdminModal
        isOpen={modalState.isOpen && modalState.type === "update"}
        onClose={closeModal}
        title="Update Order Status"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleSave} className="flex flex-col gap-5">
          <div>
            <label className="block text-[14px] font-['Lato:Bold',sans-serif] text-[#0c1950] mb-1.5">
              New Status
            </label>
            <select
              defaultValue={modalState.data?.status || "Processing"}
              className="w-full text-[15px] p-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all font-['Lato:Regular',sans-serif] cursor-pointer"
            >
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <div className="flex items-center justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-5 py-2.5 rounded-xl font-['Lato:Bold',sans-serif] text-[#0c1950] bg-gray-100 hover:bg-gray-200 transition-colors text-[14px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl font-['Lato:Bold',sans-serif] text-white bg-[#193495] hover:bg-[#0c1950] transition-colors shadow-sm text-[14px]"
            >
              Update Status
            </button>
          </div>
        </form>
      </AdminModal>
    </div>
  );
}
