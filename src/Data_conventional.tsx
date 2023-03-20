import React, { useEffect, useState } from 'react';
import { type Product, getProduct } from './Product';

export const Data: React.FC<{ url: string }> = ({ url }) => {
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    getProduct(url)
      .then((data) => {
        setProduct(data);
      })
      .catch(() => {});
  });

  if (!product) {
    return (<div>Loading...</div>);
  }
  return (<div>{product.title}</div>);
};
