import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Purchase from '@/pages/Purchase/Purchase';
import Articles from '../pages/Articles';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/articles"
        element={
          <PrivateRoute>
            <Articles />
          </PrivateRoute>
        }
      />
      <Route
        path="/purchase"
        element={
          <PrivateRoute>
            <Purchase />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
