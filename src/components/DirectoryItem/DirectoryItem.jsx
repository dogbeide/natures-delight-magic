import './directory-item.scss';

const DirectoryItem = ({ category }) => {
  const { title, imgUrl } = category;
  return (
    <div className="directory-item-container">
      <div className="background-image" style={{
        backgroundImage: `url(${imgUrl})`
      }} />
      <div className="body">
        <h2>{title}</h2>
        <p>Browse</p>
      </div>
    </div>
  )
}

export default DirectoryItem