//react
import { Routes, Route } from 'react-router-dom';

//reducer
import { useSelector } from 'react-redux';

//components
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/Footer';
import SearchWindow from './components/SearchWindow/SearchWindow';
import MobileNavigationMenu from './components/MobileNavigationMenu/MobileNavigationMenu';

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
        marginTop={headerHeight}
        navigationOptions={mobileNavigationOptions}
        navigationActive={isNavigationOpen}
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
