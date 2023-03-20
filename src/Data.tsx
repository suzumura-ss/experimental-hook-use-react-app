import React, { use } from 'react';
import { type Product, getProduct } from './Product';

export const Data: React.FC<{ url: string }> = ({ url }) => {
  const product = use<Product>(getProduct(url)); // product is never undefined.
  // const product = use<Product>(Promise.reject(Error('FAILED')));

  return (
    <div>{product.title}</div>
  );
};
