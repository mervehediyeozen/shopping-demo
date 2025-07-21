export const sortProducts = (arr , size ) => {
  const products = []
  for (let i=0 ; i<arr.length ; i+=size ) {
    products.push(arr.slice(i, i + size));
  }
  return products;
} 