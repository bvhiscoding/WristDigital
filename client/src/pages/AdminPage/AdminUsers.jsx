import React, { useState } from "react";
import AdminModal from "./AdminModal";

export default function AdminUsers() {
  const [users, setUsers] = useState([
    {
      id: "USR-001",
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "admin",
      joined: "Oct 12, 2025",
    },
    {
      id: "USR-002",
      name: "Bob Smith",
      email: "bob@example.com",
      role: "customer",
      joined: "Nov 03, 2025",
    },
    {
      id: "USR-003",
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "customer",
      joined: "Dec 15, 2025",
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
    alert(`User ${modalState.data?.name} updated successfully!`);
    closeModal();
  };

  const handleDelete = () => {
    alert(`User ${modalState.data?.name} banned successfully!`);
    closeModal();
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] font-['Alegreya_Sans:Bold',sans-serif] text-[#0c1950]">
          Manage Users
        </h1>
      </div>

      <div className="bg-white rounded-[16px] border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-50/80 border-b border-gray-100 text-[13px] font-['Lato:Bold',sans-serif] text-gray-500 uppercase tracking-wider">
              <th className="py-4 px-6 rounded-tl-[16px]">ID</th>
              <th className="py-4 px-6">User Info</th>
              <th className="py-4 px-6">Email</th>
              <th className="py-4 px-6">Role</th>
              <th className="py-4 px-6">Joined Date</th>
              <th className="py-4 px-6 text-right rounded-tr-[16px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-[15px] font-['Lato:Regular',sans-serif] text-[#0c1950]">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50/60 transition-colors">
                <td className="py-4 px-6 text-gray-500 font-mono text-[13px]">
                  {u.id}
                </td>
                <td className="py-4 px-6 font-['Lato:SemiBold',sans-serif] text-[#193495]">
                  {u.name}
                </td>
                <td className="py-4 px-6">{u.email}</td>
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-[8px] text-[12px] font-['Lato:Bold',sans-serif] uppercase tracking-wide ${
                      u.role === "admin"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {u.role}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-500">{u.joined}</td>
                <td className="py-4 px-6 text-right space-x-4">
                  <button
                    onClick={() => openModal("edit", u)}
                    className="text-[#193495] hover:opacity-70 font-['Lato:Bold',sans-serif] transition-opacity"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => openModal("delete", u)}
                    className="text-red-500 hover:opacity-70 font-['Lato:Bold',sans-serif] transition-opacity"
                  >
                    Ban
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User Modal */}
      <AdminModal
        isOpen={modalState.isOpen && modalState.type === "edit"}
        onClose={closeModal}
        title="Edit User Role"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleSave} className="flex flex-col gap-5">
          <div>
            <label className="block text-[14px] font-['Lato:Bold',sans-serif] text-[#0c1950] mb-1.5">
              User Name
            </label>
            <input
              type="text"
              defaultValue={modalState.data?.name || ""}
              disabled
              className="w-full text-[15px] p-3 rounded-lg border border-gray-200 bg-gray-100 text-gray-500 font-['Lato:Regular',sans-serif]"
            />
          </div>
          <div>
            <label className="block text-[14px] font-['Lato:Bold',sans-serif] text-[#0c1950] mb-1.5">
              Role
            </label>
            <select
              defaultValue={modalState.data?.role || "customer"}
              className="w-full text-[15px] p-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#193495] focus:ring-2 focus:ring-[#193495]/20 transition-all font-['Lato:Regular',sans-serif] cursor-pointer"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
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
              Save Changes
            </button>
          </div>
        </form>
      </AdminModal>

      {/* Delete / Ban Modal */}
      <AdminModal
        isOpen={modalState.isOpen && modalState.type === "delete"}
        onClose={closeModal}
        title="Ban User"
        maxWidth="max-w-md"
      >
        <div className="flex flex-col gap-4">
          <p className="text-[15px] font-['Lato:Regular',sans-serif] text-gray-600">
            Are you sure you want to ban{" "}
            <span className="font-['Lato:Bold',sans-serif] text-[#0c1950]">
              "{modalState.data?.name}"
            </span>
            ? They will lose access to their account permanently.
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
              Confirm Ban
            </button>
          </div>
        </div>
      </AdminModal>
    </div>
  );
}
