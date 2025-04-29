import { createBrowserRouter } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Accommodation from '../pages/Accommodation';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/accommodation/:id', element: <Accommodation /> },
  { path: '/404', element: <NotFound /> },
  { path: '*', element: <Navigate to="/404" replace /> } // attrape  le reste
])

export default router;
