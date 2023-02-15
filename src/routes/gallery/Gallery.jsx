import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import './gallery.scss';

const Gallery = () => {
  let { categoriesMap } = useContext(CategoriesContext);
  if (categoriesMap == null) categoriesMap = {};

  return (
    <div className="gallery-container">
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </div>
  );
} 

export default Gallery;