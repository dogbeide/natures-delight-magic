import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'

const Gallery = () => (
  <h1>Art gallery and stuffs</h1>
)

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
