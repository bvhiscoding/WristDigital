import React, { useState } from 'react';

// Small expand arrow icon
const ChevronIcon = ({ expanded }) => (
  <svg
    className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 9L12 15L18 9" stroke="#1a2530" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Checkbox item
const CheckboxItem = ({ label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div
        onClick={() => setChecked(!checked)}
        className={`w-5 h-5 rounded border-2 flex-shrink-0 transition-colors
          ${checked ? 'bg-[#193495] border-[#193495]' : 'border-gray-400 bg-white group-hover:border-[#193495]'}`}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        onKeyDown={(e) => e.key === ' ' && setChecked(!checked)}
      >
        {checked && (
          <svg className="w-full h-full p-0.5" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5 9-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span className="text-black text-lg font-['Lato'] select-none">{label}</span>
    </label>
  );
};

// Collapsible filter group
const FilterGroup = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col gap-3 pb-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span className="text-[22px] font-semibold text-black font-['Lato']">{title}</span>
        <ChevronIcon expanded={open} />
      </button>
      {open && (
        <div className="flex flex-col gap-3 pl-1">
          {children}
        </div>
      )}
    </div>
  );
};

const FilterPanel = () => {
  const [customSize, setCustomSize] = useState('');

  return (
    <aside className="w-[284px] flex-shrink-0 bg-white flex flex-col gap-6 py-6 pr-6">

      {/* Size */}
      <FilterGroup title="Size">
        <CheckboxItem label="Men's" />
        <CheckboxItem label="Women's" />
        <CheckboxItem label="Kids'" />
        {/* Custom Size input */}
        <div className="flex flex-col gap-1 mt-1">
          <span className="text-black text-lg font-['Lato']">Custom Size:</span>
          <div className="relative">
            <input
              type="text"
              value={customSize}
              onChange={(e) => setCustomSize(e.target.value)}
              placeholder="e.g., 44"
              className="w-[140px] border-b border-gray-300 pb-0.5 text-sm font-['Lato'] italic text-gray-400 focus:outline-none focus:border-[#193495] bg-transparent"
            />
          </div>
        </div>
      </FilterGroup>

      {/* Bezel Material */}
      <FilterGroup title="Bezel Material">
        <CheckboxItem label="Aluminum" />
        <CheckboxItem label="Stainless Steel" />
        <CheckboxItem label="Titanium" />
      </FilterGroup>

      {/* Shape */}
      <FilterGroup title="Shape">
        <CheckboxItem label="Round" />
        <CheckboxItem label="Square" />
        <CheckboxItem label="Rectangular" />
      </FilterGroup>

      {/* Water Resistance */}
      <FilterGroup title="Water Resistance">
        <CheckboxItem label="5 ATM" />
        <CheckboxItem label="10 ATM" />
        <CheckboxItem label="IP67" />
        <CheckboxItem label="IP68" />
        <CheckboxItem label="ISO 22810" />
      </FilterGroup>

      {/* Action buttons */}
      <div className="flex items-center gap-4 pt-2">
        <button className="text-[#193495] text-base font-['Lato'] hover:underline focus:outline-none">
          Reset
        </button>
        <button className="bg-[#193495] text-white text-sm font-['Lato'] font-medium px-5 py-1.5 rounded-[5px] hover:bg-[#1030b0] transition-colors focus:outline-none">
          Apply
        </button>
      </div>
    </aside>
  );
};

export default FilterPanel;
