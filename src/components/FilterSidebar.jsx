import { useState } from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters(prev => {
      const values = new Set(prev[name]);
      checked ? values.add(value) : values.delete(value);
      return { ...prev, [name]: [...values] };
    });
  };

  const options = {
    gender: ['Men', 'Women', 'Unisex'],
    category: ['Tops', 'Bottoms', 'Accessories'],
    color: ['Black', 'Blue', 'White', 'Gray'],
    material: ['Polyester', 'Stretch Cotton', 'Mesh', 'Breathable Nylon']
  };

  return (
    <aside style={{ width: '200px', paddingRight: '1rem', borderRight: '1px solid #ccc' }}>
      <h3>Filters</h3>
      {Object.entries(options).map(([name, values]) => (
        <div key={name} style={{ marginBottom: '1rem' }}>
          <strong>{name.charAt(0).toUpperCase() + name.slice(1)}</strong>
          {values.map(value => (
            <div key={value}>
              <label>
                <input
                  type="checkbox"
                  name={name}
                  value={value}
                  checked={filters[name].includes(value)}
                  onChange={handleChange}
                />
                {value}
              </label>
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
