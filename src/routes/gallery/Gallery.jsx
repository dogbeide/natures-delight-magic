import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import './gallery.scss';

const Gallery = () => {
  let { products } = useContext(ProductsContext);
  if (products == null) products = [];

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
} 

export default Gallery;