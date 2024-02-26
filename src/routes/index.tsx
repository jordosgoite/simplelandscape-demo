import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Articles from '../pages/Articles';
import Home from '../pages/Home';
import Purchase from '../pages/Purchase';
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
