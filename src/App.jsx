import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import Gallery from './routes/gallery/Gallery'
import Navigation from './routes/navigation/Navigation'
import Authentication from './routes/authentication/Authentication'
import Checkout from './routes/checkout/Checkout'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
