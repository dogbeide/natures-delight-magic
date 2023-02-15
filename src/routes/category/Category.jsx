import { useContext, useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import './category.scss'

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <Fragment>
      <h2 className="category-page-title">{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </Fragment>
  )

}

export default Category