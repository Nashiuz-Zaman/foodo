//react
import { Routes, Route } from 'react-router-dom';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { closeNavigation } from './features/navigation/navigationSlice';

//components
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/Footer';
import SearchWindow from './components/SearchWindow/SearchWindow';
import MobileNavigationMenu from './components/MobileNavigationMenu/MobileNavigationMenu';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

//page components
import Home from './page-components/Home/Home';
import Menu from './page-components/Menu/Menu';

//hooks
import useNoScrollBackground from './hooks/useNoScrollBackground';
import useScrollToTop from './hooks/useScrollToTop';

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
  useScrollToTop();
  const { headerHeight } = useSelector((state) => state.header);
  const dispatch = useDispatch();

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
        onClick={() => {
          dispatch(closeNavigation());
        }}
      />

      <ShoppingCart emptyCartLogo={emptyCartLogo} headerHeight={headerHeight} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>

      <Footer brandName={brandName} brandLogo={brandLogo} />
    </div>
  );
}

export default App;
