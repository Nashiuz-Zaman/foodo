//react
import { Routes, Route } from 'react-router-dom';

//reducer
import { useSelector } from 'react-redux';

//components
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/Footer';
import SearchWindow from './components/SearchWindow/SearchWindow';
import MobileNavigationMenu from './components/MobileNavigationMenu/MobileNavigationMenu';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

//page components
import Home from './page-components/Home/Home';

//hooks
import useNoScrollBackground from './hooks/useNoScrollBackground';

//image source
import brandLogo from './assets/food-transparent.png';
import emptyCartLogo from './assets/empty-cart.png';

//styles
import './basic-styling/App.css';

//data
import { mobileNavigationOptions } from './data/NavigationMenuData';
const brandName = 'foodo';

function App() {
  useNoScrollBackground();
  const { headerHeight } = useSelector((state) => state.header);

  // hamburger menu and mobile navigation menu active states are controlled by the same state inside the redux store which is extracted below
  const { isOpen: isNavigationOpen } = useSelector((state) => state.navigation);

  return (
    <div className="App">
      <MobileHeader
        brandName={brandName}
        brandLogo={brandLogo}
        isMenuIconActive={isNavigationOpen}
      />

      <SearchWindow headerHeight={headerHeight} />

      <MobileNavigationMenu
        headerHeight={headerHeight}
        navigationOptions={mobileNavigationOptions}
        navigationActive={isNavigationOpen}
      />

      <ShoppingCart emptyCartLogo={emptyCartLogo} headerHeight={headerHeight} />

      <main style={{ overflow: 'hidden' }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer brandName={brandName} brandLogo={brandLogo} />
    </div>
  );
}

export default App;
