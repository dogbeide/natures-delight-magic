import CategoryList from './components/CategoryList/CategoryList';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Art',
      imgUrl: 'https://i.imgur.com/BzHzA8L.jpeg'
    },
    {
      id: 2,
      title: 'Jewelry',
      imgUrl: 'https://i.imgur.com/KA1pvBx.jpeg'
    },
    {
      id: 3,
      title: 'Food',
      imgUrl: 'https://i.imgur.com/iDLLQny.jpeg'
    },
    {
      id: 4,
      title: 'Clothing',
      imgUrl: 'https://i.imgur.com/RvXSLhl.jpeg'
    },
    {
      id: 5,
      title: 'Astrology',
      imgUrl: 'https://i.imgur.com/OinybNy.jpeg'
    },
  ]

  return (<CategoryList categories={categories} />);
}

export default App;
