const FilterSidebar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
  
    // Handle price range inputs
    if (name === 'minPrice' || name === 'maxPrice') {
      setFilters(prev => ({
        ...prev,
        price: {
          ...prev.price,
          [name === 'minPrice' ? 'min' : 'max']: value,
        }
      }));
    } else {
      // Handle checkbox filters (gender, category, etc.)
      setFilters(prev => {
        const values = new Set(prev[name]);
        if (checked) {
          values.add(value);
        } else {
          values.delete(value);
        }
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
      <aside style={{ width: '200px', paddingRight: '1rem', borderRight: '1px solid #ccc' }}>
        <h3>Filters</h3>
  
        {/* Other filters */}
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
  
        {/* Price range */}
        <div style={{ marginBottom: '1rem' }}>
          <strong>Price ($)</strong>
          <div>
            <label>
              Min:
              <input
                type="number"
                name="minPrice"
                value={filters.price.min}
                onChange={(e) => {
                    setFilters(prev => ({
                    ...prev,
                    price: { ...prev.price, min: e.target.value }
                    }));
                }}
            />

            </label>
          </div>
          <div>
            <label>
              Max:
              <input
                type="number"
                name="maxPrice"
                value={filters.price.max}
                onChange={(e) => {
                    setFilters(prev => ({
                    ...prev,
                    price: { ...prev.price, max: e.target.value }
                    }));
                }}
            />

            </label>
          </div>
        </div>
      </aside>
    );
  };
  
  export default FilterSidebar;
  