import './category.css';

const Category = ({ category }) => {
  const { title, imgUrl } = category;
  return (
    <div className="category">
      <div className="background-image" style={{
        backgroundImage: `url(${imgUrl})`
      }} />
      <div className="category-body">
        <h2>{title}</h2>
        <p>Browse</p>
      </div>
    </div>
  )
}

export default Category