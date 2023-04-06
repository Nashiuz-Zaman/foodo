//react
import { Routes, Route } from 'react-router-dom';

//components
import MobileHeader from './components/MobileHeader/MobileHeader';

//page components
import Home from './page-components/Home/Home';

//styles
import './basic-styling/App.css';

function App() {
  return (
    <div className="App">
      <MobileHeader brandName={'foodo'} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
