import React from 'react';
import { useParams } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

const products = [
  { id: 1, name: 'Luxurious Plush Cotton Towel', price: 100, description: 'Wrap yourself in the ultimate comfort with our Luxurious Plush Cotton Towel, designed to elevate your everyday bathing experience. Crafted from 100% premium long-staple cotton, this towel offers exceptional softness that feels gentle against your skin, while its superior absorbency quickly wicks away moisture, leaving you feeling dry and refreshed.' ,image: '../src/assets/1.jpg',quantity:1 },
  { id: 2, name: 'Ultrabook Laptop', price: 500, description: 'Meet the Sleek and Powerful Ultrabook Laptop, your perfect companion for work, play, and everything in between. With its ultra-slim design and lightweight build, this laptop is engineered for those who demand performance on the go. Encased in a premium aluminum chassis, it combines durability with a stylish, modern aesthetic that makes a statement wherever you take it.',image: '../src/assets/2.jpg' ,quantity:1 },
  { id: 3, name: 'High-Resolution Mirrorless Camera', price: 400, description: "Step up your photography game with the High-Resolution Mirrorless Camera, designed for enthusiasts and professionals alike. This camera combines cutting-edge technology with intuitive design to deliver breathtaking images and videos. Whether you're shooting portraits, landscapes, or fast-moving action, this camera gives you the power to capture moments with exceptional clarity and precision." ,image: '../src/assets/3.jpg',quantity:1},
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id!));
  // console.log(product)
  const addToCart = useCartStore(state => state.addToCart);
  if (!product) return <div>Product not found</div>;

  return (
    <>
    
    <div className="container mx-auto p-4 text-center flex justify-around">
      <div>
        <img src={product.image} alt={product.name} className='max-w-xl h-full object-cover mb-4'/>
      </div>
      <div className='mt-20 ml-10 '>
        <h1 className="text-2xl font-bold mb-10">{product.name}</h1>
        <p className='w-11/12 mb-28'>{product.description}</p>
        <div className='flex justify-center items-center gap-10'>
          <p className='mt-3'>Price: ${product.price}</p>
          <button
          onClick={()=> {addToCart(product)}}
          className="bg-blue-500 text-white px-4 py-2 mt-4">
          Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;