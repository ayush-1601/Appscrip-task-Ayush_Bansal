import '../styles/filterSidebar.css'

import { useState } from 'react';

const FilterSection = ({ title, options = ['All'] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="filter-section">
      <div className="filter-title" onClick={() => setIsOpen(!isOpen)}>
        <strong>{title}</strong>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <ul className="filter-options">
          {options.map((opt, i) => (
            <li key={i}>{opt}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FilterSidebar = () => (
  <aside className="sidebar">
    <div className="filter-checkbox">
      <label>
        <input type="checkbox" /> CUSTOMIZBLE
      </label>
    </div>
    <hr />
    <FilterSection title="IDEAL FOR" />
    <hr />
    <FilterSection title="OCCASION" />
    <hr />
    <FilterSection title="WORK" />
    <hr />
    <FilterSection title="FABRIC" />
    <hr />
    <FilterSection title="SEGMENT" />
    <hr />
    <FilterSection title="SUITABLE FOR" />
    <hr />
    <FilterSection title="RAW MATERIALS" />
    <hr />
    <FilterSection title="PATTERN" />
  </aside>
);

export default FilterSidebar;