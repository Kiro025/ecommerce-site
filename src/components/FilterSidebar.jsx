const FilterSidebar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'minPrice' || name === 'maxPrice') {
      setFilters(prev => ({
        ...prev,
        price: {
          ...prev.price,
          [name === 'minPrice' ? 'min' : 'max']: value,
        }
      }));
    } else {
      setFilters(prev => {
        const values = new Set(prev[name]);
        checked ? values.add(value) : values.delete(value);
        return { ...prev, [name]: [...values] };
      });
    }
  };

  const options = {
    gender: ['Men', 'Women', 'Unisex'],
    category: ['Tops', 'Bottoms', 'Accessories'],
    color: ['Black', 'Blue', 'White', 'Gray'],
    material: ['Polyester', 'Stretch Cotton', 'Mesh', 'Breathable Nylon'],
  };

  return (
    <aside className="filters">
      {Object.entries(options).map(([name, values]) => (
        <div key={name} className="filter-group">
          <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
          {values.map(value => (
            <label key={value}>
              <input
                type="checkbox"
                name={name}
                value={value}
                checked={filters[name].includes(value)}
                onChange={handleChange}
              />
              {value}
            </label>
          ))}
        </div>
      ))}

      <div className="filter-group">
        <h3>Price ($)</h3>
        <label>
          Min:
          <input
            type="number"
            name="minPrice"
            value={filters.price.min}
            onChange={(e) =>
              setFilters(prev => ({
                ...prev,
                price: { ...prev.price, min: e.target.value }
              }))
            }
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            name="maxPrice"
            value={filters.price.max}
            onChange={(e) =>
              setFilters(prev => ({
                ...prev,
                price: { ...prev.price, max: e.target.value }
              }))
            }
          />
        </label>
      </div>
    </aside>
  );
};

export default FilterSidebar;
