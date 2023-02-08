import './categories.scss'

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Art'
    },
    {
      id: 2,
      title: 'Jewelry'
    },
    {
      id: 3,
      title: 'Food'
    },
    {
      id: 4,
      title: 'Clothing'
    },
    {
      id: 5,
      title: 'Astrology'
    },
  ]

  return (
    <div className="categories">
      {categories.map(({id, title}) => (
        <div className="category" key={id}>
          <img />
          <div className="category-body">
            <h2>{title}</h2>
            <p>Browse</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
