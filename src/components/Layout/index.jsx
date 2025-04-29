import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout() {
  return (
    <>
     
      <Header />
      <main className='page'>
        <Outlet /> {/* Ici va apparaître Home, About, etc */}
      </main>
      <Footer />
    </>
  );
}
