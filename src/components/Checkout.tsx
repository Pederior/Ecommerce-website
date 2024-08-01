import React from 'react';

const Checkout: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Checkout successful!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input type="text" className="w-full p-2 border" required />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input type="text" className="w-full p-2 border" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Checkout;