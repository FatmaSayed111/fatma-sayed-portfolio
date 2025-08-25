import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import ProductCard from "../components/ProductCard";
import { Product } from "../models/productModel";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const data = await getProducts();
        const mapped = data.map((item) => Product.fromApi(item));
        if (mounted) setProducts(mapped);
      } catch (err) {
        if (mounted) setError(err.message || "Error fetching products");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <section id="products" className="section container">
      <h1 className="heading text-center">Products</h1>
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
