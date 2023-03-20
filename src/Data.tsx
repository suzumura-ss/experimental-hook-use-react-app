import React, { use } from 'react';
import { type Product, getProduct } from './Product';

export const Data: React.FC<{ url: string, shouldFetch: boolean }> = ({ url, shouldFetch }) => {
  let product = { title: 'Default' };
  if (shouldFetch) {
    product = use<Product>(getProduct(url)); // product is never undefined.
    // product = use<Product>(Promise.reject(Error('FAILED')));
  }

  return (
    <div>{product.title}</div>
  );
};
