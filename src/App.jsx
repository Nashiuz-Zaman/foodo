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
import DesktopHeader from './components/DesktopHeader/DesktopHeader';

//page components
import Home from './page-components/Home/Home';
import Menu from './page-components/Menu/Menu';
import NoContent from './page-components/NoContent/NoContent';

//hooks
import useNoScrollBackground from './hooks/useNoScrollBackground';
import useScrollToTop from './hooks/useScrollToTop';
import useMediaQueryMatcher from './hooks/useMediaQueryMatcher';

//image source
import brandLogo from './assets/brandlogo.webp';
import emptyCartLogo from './assets/empty-cart.png';

//styles
import './basic-styling/App.css';

//data
import {
  mobileNavigationOptions,
  ctaButtonData,
} from './data/NavigationMenuData';
const brandName = 'foodo';

function App() {
  useNoScrollBackground();
  useScrollToTop();

  // To detect screen sizes
  const { mediaQueryState } = useMediaQueryMatcher();

  // Extracting header heights used to correctly position the windows such as search window, shopping cart and mobile navigation menu windows
  const { mobileHeaderHeight } = useSelector((state) => state.mobileHeader);
  const { desktopHeaderHeight } = useSelector((state) => state.desktopHeader);

  const dispatch = useDispatch();

  // hamburger menu and mobile navigation menu active states are controlled by the same state inside the redux store which is extracted below
  const { isOpen: isNavigationOpen } = useSelector((state) => state.navigation);

  return (
    <div className="App">
      {mediaQueryState.isComputer && (
        <DesktopHeader
          brandName={brandName}
          brandLogo={brandLogo}
          navigationOptions={mobileNavigationOptions}
          ctaButtonData={ctaButtonData}
        />
      )}

      {!mediaQueryState.isComputer && (
        <MobileHeader
          brandName={brandName}
          brandLogo={brandLogo}
          isMenuIconActive={isNavigationOpen}
        />
      )}

      <SearchWindow
        headerHeight={
          mediaQueryState.isComputer ? desktopHeaderHeight : mobileHeaderHeight
        }
      />

      <MobileNavigationMenu
        headerHeight={mobileHeaderHeight}
        navigationOptions={mobileNavigationOptions}
        navigationActive={isNavigationOpen}
        onClick={() => {
          dispatch(closeNavigation());
        }}
      />

      <ShoppingCart
        emptyCartLogo={emptyCartLogo}
        headerHeight={
          mediaQueryState.isComputer ? desktopHeaderHeight : mobileHeaderHeight
        }
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NoContent />} />
        </Routes>
      </main>

      <Footer brandName={brandName} brandLogo={brandLogo} />
    </div>
  );
}

export default App;
