import { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

const Home = () => {
  const [filters, setFilters] = useState({
    gender: [],
    category: [],
    color: [],
    material: [],
  });

  const applyFilters = () => {
    return products.filter(product => {
      return (
        (filters.gender.length === 0 || filters.gender.includes(product.gender)) &&
        (filters.category.length === 0 || filters.category.includes(product.category)) &&
        (filters.color.length === 0 || filters.color.includes(product.color)) &&
        (filters.material.length === 0 || filters.material.includes(product.material))
      );
    });
  };

  const filteredProducts = applyFilters();

  return (
    <div style={{ display: 'flex', padding: '2rem' }}>
      <FilterSidebar filters={filters} setFilters={setFilters} />

      <div style={{ marginLeft: '2rem', flex: 1 }}>
        <h2>Our Sportswear Collection</h2>
        {filteredProducts.length === 0 ? (
          <p>No products match your filters.</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '2rem' }}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;


  