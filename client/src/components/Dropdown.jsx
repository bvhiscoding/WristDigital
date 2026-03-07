import React, { useState } from "react";

/**
 * Reusable dropdown selector.
 * Props:
 *   label    {string}   - Bold prefix label shown before the current value
 *   value    {string}   - Currently selected option
 *   options  {string[]} - List of available options
 *   onSelect {function} - Called with the chosen option string
 */
const Dropdown = ({ label, value, options, onSelect }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-[20px] font-['Lato'] focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="font-semibold text-black">{label}</span>
        <span className="text-[#675e5e]">{value}</span>
        <svg
          className="w-4 h-4 text-black rotate-90"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <ul
          className="absolute top-8 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-20 min-w-[180px] font-['Lato'] text-[16px]"
          role="listbox"
        >
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              onClick={() => {
                onSelect(opt);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${
                opt === value ? "text-[#193495] font-semibold" : "text-black"
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
