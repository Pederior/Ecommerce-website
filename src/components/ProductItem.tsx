import React from 'react';
import { Link } from 'react-router-dom';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    image:string;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  
  return (
    <div className="border p-4 text-center">
      <img src={product.image} alt={product.name} className='w-full h-80 object-cover mb-4' />
      <h2 className="text-xl font-bold mb-8">{product.name}</h2>
      <div className='flex items-center justify-center gap-5'>
      <p className=''>${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500">View Details</Link>
      </div>
    </div>
  );
};

export default ProductItem;