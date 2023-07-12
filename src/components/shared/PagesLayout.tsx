import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const PagesLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PagesLayout;
