import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './global.css';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home.tsx';
import UserProfile from './pages/UserProfile.tsx';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthCallback from './pages/AuthCallback.tsx';
import ProtectedRoute from './auth/ProtectedRoute.tsx';
import ManageRestaurantPage from './pages/ManageRestaurantPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route element={<ProtectedRoute />}>
        <Route path="user-profile" element={<UserProfile />} />
      </Route>
      <Route path="manage-restaurant" element={<ManageRestaurantPage />} />
      <Route path="auth-callback" element={<AuthCallback />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
