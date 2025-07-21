export const applyFilters = (products, filters) => {
  return products.filter(product => {
    return filters.some(filter => {
      if (filter === "vcheap") return product.price < 100;
      if (filter === "cheap") return product.price >= 100 && product.price < 250;
      if (filter === "normall") return product.price >= 250 && product.price < 500;
      if (filter === "exp") return product.price >= 500 && product.price < 750;
      if (filter === "vrexp") return product.price >= 750 && product.price < 1000;
      if (filter === "vvexp") return product.price >= 1000;

      return (
        product.wideness?.toLowerCase() === filter.toLowerCase() ||
        product.color?.toLowerCase() === filter.toLowerCase() ||
        product.brand?.toLowerCase() === filter.toLowerCase() ||
        product.style?.toLowerCase() === filter.toLowerCase() ||
        product.material?.toLowerCase() === filter.toLowerCase()
      );
    });
  });
}