
import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Luxurious Plush Cotton Towel', price: 100 , image: '../src/assets/1.jpg'},
  { id: 2, name: 'Ultrabook Laptop', price: 500 , image: '../src/assets/2.jpg'},
  { id: 3, name: 'High-Resolution Mirrorless Camera', price: 400 , image: '../src/assets/3.jpg'},
];

const ProductList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;