import './directory.scss';
import DirectoryItem from '../DirectoryItem/DirectoryItem';

const Directory = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;