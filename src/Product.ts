export interface Product {
  title: string
}

export async function getProduct (url: string): Promise<Product> {
  return await fetch(url).then(async res => await res.json());
}
