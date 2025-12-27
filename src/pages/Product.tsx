import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductPage from "@/components/ProductPage";

import { useParams, Navigate } from "react-router-dom";
import { getProductBySlug } from "@/lib/products";

const Product = () => {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : null;

  if (!product) {
    return <Navigate to="/" replace />;
  }

  // Map product into ProductPage prop shape
  const mapped = {
    id: product.slug,
    title: product.name,
    category: product.category,
    images: [product.image],
    benefits: product.benefits,
    description: product.description,
    ingredients: product.ingredients,
    howToUse: product.howToUse,
    faqs: product.faqs,
    specs: product.specs,
    related: product.related,
    rating: product.rating,
    reviews: product.reviews,
    variants: [
      { id: product.size || "default", label: product.size || "Standard", price: product.price || 0, oldPrice: product.oldPrice },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductPage product={mapped} />
      </main>
      <Footer />
    </div>
  );
};

export default Product;