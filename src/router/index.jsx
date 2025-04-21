import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Accommodation from '../pages/Accommodation';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/accommodation/:id', element: <Accommodation /> },
  { path: '*', element: <NotFound /> }
]);

export default router;
