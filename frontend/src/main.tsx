import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home.tsx';
import UserProfile from './pages/UserProfile.tsx';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="user-profile" element={<UserProfile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0ProviderWithNavigate>
      <RouterProvider router={router} />
    </Auth0ProviderWithNavigate>
  </React.StrictMode>
);
