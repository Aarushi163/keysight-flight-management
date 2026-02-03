const BASE_URL = "https://fakestoreapi.com";

export const getProductsByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/products/category/${category}`);
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
};
