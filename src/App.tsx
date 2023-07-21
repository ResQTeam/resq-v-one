import { Route, Routes } from 'react-router-dom';
import PagesLayout from './components/shared/PagesLayout';
import Home from './pages/Home/index';
import About from './pages/About/';
import Service from './pages/Service/Service';

const App = () => {
  return (
    <>
      {' '}
      <Routes>
        <Route element={<PagesLayout />} path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Service />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
