import React, { useState } from "react";
import AdminModal from "./AdminModal";

export default function AdminProducts() {
  const [products, setProducts] = useState([
    {
      id: "PRD-001",
      name: "WristDigital Classic Watch",
      price: "$199.00",
      stock: 45,
      status: "Active",
    },
    {
      id: "PRD-002",
      name: "Sport Band Pro",
      price: "$49.00",
      stock: 120,
      status: "Active",
    },
    {
      id: "PRD-003",
      name: "Elegant Leather Strap",
      price: "$89.00",
      stock: 0,
      status: "Out of Stock",
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
    alert(
      `Product ${modalState.type === "edit" ? "updated" : "added"} successfully!`,
    );
    closeModal();
  };

  const handleDelete = () => {
    alert(`Product ${modalState.data?.id} deleted successfully!`);
    closeModal();
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] font-['Alegreya_Sans:Bold',sans-serif] text-[#0c1950]">
          Manage Products
        </h1>
        <button
          onClick={() => openModal("add")}
          className="bg-[#193495] text-white px-6 py-2.5 rounded-full font-['Lato:Bold',sans-serif] text-[14px] hover:bg-[#0c1950] transition-colors shadow-sm"
        >
          + Add Product
        </button>
      </div>

      <div className="bg-white rounded-[16px] border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100 text-[13px] font-['Lato:Bold',sans-serif] text-gray-500 uppercase tracking-wider">
              <th className="py-4 px-6 rounded-tl-[16px]">ID</th>
              <th className="py-4 px-6">Product Info</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">Stock</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6 text-right rounded-tr-[16px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-[15px] font-['Lato:Regular',sans-serif] text-[#0c1950]">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50/60 transition-colors">
                <td className="py-4 px-6 text-gray-500 font-mono text-[13px]">
                  {p.id}
                </td>
                <td className="py-4 px-6 font-['Lato:SemiBold',sans-serif] text-[#193495]">
                  {p.name}
                </td>
                <td className="py-4 px-6 font-medium">{p.price}</td>
                <td className="py-4 px-6">{p.stock}</td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-[8px] text-[12px] font-['Lato:Bold',sans-serif] ${
                      p.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-right space-x-4">
                  <button
                    onClick={() => openModal("edit", p)}
                    className="text-[#193495] hover:opacity-70 font-['Lato:Bold',sans-serif] transition-opacity"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => openModal("delete", p)}
                    className="text-red-500 hover:opacity-70 font-['Lato:Bold',sans-serif] transition-opacity"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Modal */}
      <AdminModal
        isOpen={
          modalState.isOpen &&
          (modalState.type === "add" || modalState.type === "edit")
        }
        onClose={closeModal}
        title={modalState.type === "edit" ? "Edit Product" : "Add New Product"}
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleSave} className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2">
              <label className="block text-[14px] font-['Lato:Bold',sans-serif] text-[#0c1950] mb-1.5">
                Product Name
              </label>
              <input
                type="text"
                defaultValue={modalState.data?.name || ""}
                placeholder="Product Name"
                className="w-full text-[15px] p-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all font-['Lato:Regular',sans-serif]"
                required
              />
            </div>
            <div>
              <label className="block text-[14px] font-['Lato:Bold',sans-serif] text-[#0c1950] mb-1.5">
                Price (USD)
              </label>
              <input
                type="text"
                defaultValue={modalState.data?.price || ""}
                placeholder="$0.00"
                className="w-full text-[15px] p-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all font-['Lato:Regular',sans-serif]"
                required
              />
            </div>
            <div>
              <label className="block text-[14px] font-['Lato:Bold',sans-serif] text-[#0c1950] mb-1.5">
                Stock
              </label>
              <input
                type="number"
                defaultValue={modalState.data?.stock || ""}
                placeholder="0"
                className="w-full text-[15px] p-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all font-['Lato:Regular',sans-serif]"
                required
              />
            </div>
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
              Save Product
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Delete Confirmation Modal */}
      <AdminModal
        isOpen={modalState.isOpen && modalState.type === "delete"}
        onClose={closeModal}
        title="Confirm Deletion"
        maxWidth="max-w-md"
      >
        <div className="flex flex-col gap-4">
          <p className="text-[15px] font-['Lato:Regular',sans-serif] text-gray-600">
            Are you sure you want to delete{" "}
            <span className="font-['Lato:Bold',sans-serif] text-[#0c1950]">
              "{modalState.data?.name}"
            </span>
            ? This action cannot be undone.
          </p>
          <div className="flex items-center justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-5 py-2.5 rounded-xl font-['Lato:Bold',sans-serif] text-[#0c1950] bg-gray-100 hover:bg-gray-200 transition-colors text-[14px]"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-5 py-2.5 rounded-xl font-['Lato:Bold',sans-serif] text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm text-[14px]"
            >
              Confirm Delete
            </button>
          </div>
        </div>
      </AdminModal>
    </div>
  );
}
