import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout = ({ screenSize }) => {
  return (
    <>
      <Header screenSize={screenSize} />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
