import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'

const Gallery = () => (
  <h1>Art gallery and stuffs</h1>
)

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='gallery' element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
