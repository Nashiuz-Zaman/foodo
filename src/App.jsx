//react
import { Routes, Route } from 'react-router-dom';

//components
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/Footer';

//page components
import Home from './page-components/Home/Home';

//image source
import foodTransparent from './assets/food-transparent.png';

//styles
import './basic-styling/App.css';

function App() {
  return (
    <div className="App">
      <MobileHeader brandName={'foodo'} brandLogo={foodTransparent} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer brandName={'foodo'} brandLogo={foodTransparent} />
    </div>
  );
}

export default App;
