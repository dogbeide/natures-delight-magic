import './category-list.scss';
import Category from '../Category/Category';

const CategoryList = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}

export default CategoryList;