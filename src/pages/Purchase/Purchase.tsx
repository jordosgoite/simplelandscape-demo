import React from 'react';
import useGlobalStore from '@/store/useGlobalStore';

const Purchase = () => {
  const { selectedProducts } = useGlobalStore((state) => state);
  return (
    <div className="container my-12 mx-auto px-4 md:px-12 relative">
      <div className="flex justify-center w-full"></div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {!selectedProducts ? (
          <div>Loading...</div>
        ) : (
          selectedProducts.map((item, key) => <p key={key}>{item.nombre}</p>)
        )}
      </div>
    </div>
  );
};

export default Purchase;
