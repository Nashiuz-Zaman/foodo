//react
import { Routes, Route } from 'react-router-dom';

//components
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/Footer';

//page components
import Home from './page-components/Home/Home';

//image source
import brandLogo from './assets/food-transparent.png';

//styles
import './basic-styling/App.css';

//data
import { mobileNavigationOptions } from './data/NavigationMenuData';
const brandName = 'foodo';

function App() {
  return (
    <div className="App">
      <MobileHeader
        brandName={brandName}
        brandLogo={brandLogo}
        navigationOptions={mobileNavigationOptions}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer brandName={brandName} brandLogo={brandLogo} />
    </div>
  );
}

export default App;
