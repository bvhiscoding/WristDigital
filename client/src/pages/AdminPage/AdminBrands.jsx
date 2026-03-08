import React, { useState } from "react";
import AdminModal from "./AdminModal";

export default function AdminBrands() {
  const [brands, setBrands] = useState([
    { id: "BRD-01", name: "Apple", productsCount: 12 },
    { id: "BRD-02", name: "Samsung", productsCount: 8 },
    { id: "BRD-03", name: "Garmin", productsCount: 15 },
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
      `Brand ${modalState.type === "edit" ? "updated" : "added"} successfully!`,
    );
    closeModal();
  };

  const handleDelete = () => {
    alert(`Brand ${modalState.data?.id} deleted successfully!`);
    closeModal();
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] font-['Alegreya_Sans:Bold',sans-serif] text-[#0c1950]">
          Manage Brands
        </h1>
        <button
          onClick={() => openModal("add")}
          className="bg-[#193495] text-white px-6 py-2.5 rounded-full font-['Lato:Bold',sans-serif] text-[14px] hover:bg-[#0c1950] transition-colors shadow-sm"
        >
          + Add Brand
        </button>
      </div>

      <div className="bg-white rounded-[16px] border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100 text-[13px] font-['Lato:Bold',sans-serif] text-gray-500 uppercase tracking-wider">
              <th className="py-4 px-6 rounded-tl-[16px]">ID</th>
              <th className="py-4 px-6">Brand Name</th>
              <th className="py-4 px-6">Products Count</th>
              <th className="py-4 px-6 text-right rounded-tr-[16px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-[15px] font-['Lato:Regular',sans-serif] text-[#0c1950]">
            {brands.map((b) => (
              <tr key={b.id} className="hover:bg-gray-50/60 transition-colors">
                <td className="py-4 px-6 text-gray-500 font-mono text-[13px]">
                  {b.id}
                </td>
                <td className="py-4 px-6 font-['Lato:SemiBold',sans-serif] text-[#193495]">
                  {b.name}
                </td>
                <td className="py-4 px-6">{b.productsCount}</td>
                <td className="py-4 px-6 text-right space-x-4">
                  <button
                    onClick={() => openModal("edit", b)}
                    className="text-[#193495] hover:opacity-70 font-['Lato:Bold',sans-serif] transition-opacity"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => openModal("delete", b)}
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
        title={modalState.type === "edit" ? "Edit Brand" : "Add New Brand"}
        maxWidth="max-w-md"
      >
        <form onSubmit={handleSave} className="flex flex-col gap-5">
          <div>
            <label className="block text-[14px] font-['Lato:Bold',sans-serif] text-[#0c1950] mb-1.5">
              Brand Name
            </label>
            <input
              type="text"
              defaultValue={modalState.data?.name || ""}
              placeholder="e.g. Apple"
              className="w-full text-[15px] p-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all font-['Lato:Regular',sans-serif]"
              required
            />
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
              Save Brand
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
