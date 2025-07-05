import { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import PromoBanner from '../components/PromoBanner';


const Home = () => {
  const [filters, setFilters] = useState({
    gender: [],
    category: [],
    color: [],
    material: [],
    price: { min: '', max: '' },
  });

  const applyFilters = () => {
    return products.filter(product => {
      const min = parseFloat(filters.price.min) || 0;
      const max = parseFloat(filters.price.max) || Infinity;
  
      const matchesGender = filters.gender.length === 0 || filters.gender.includes(product.gender);
      const matchesCategory = filters.category.length === 0 || filters.category.includes(product.category);
      const matchesColor = filters.color.length === 0 || filters.color.includes(product.color);
      const matchesMaterial = filters.material.length === 0 || filters.material.includes(product.material);
      const matchesPrice = product.price >= min && product.price <= max;
  
      return matchesGender && matchesCategory && matchesColor && matchesMaterial && matchesPrice;
    });
  };
  
  

  const filteredProducts = applyFilters();

  return (

    <>

    <PromoBanner />
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
    </>
  );
};

export default Home;


  