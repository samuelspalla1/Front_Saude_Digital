import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx'; // Componente principal
import ClienteDashboard from './pages/ClienteDashboard.jsx'; // Dashboard do cliente
import CorretorDashboard from './pages/CorretorDashboard.jsx'; // Dashboard do corretor
import CorretorPerfil from './pages/CorretorPerfil.jsx';
import Mensagens from './pages/Mensagens.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App isLogin={true} />, // Tela de login
  },
  {
    path: '/login',
    element: <App isLogin={true} />, // Rota para a tela de login
  },
  {
    path: '/register',
    element: <App isLogin={false} />, // Rota para a tela de cadastro
  },
  {
    path: '/cliente-dashboard',
    element: <ClienteDashboard />, // Rota para o dashboard do cliente
  },
  {
    path: '/corretor-dashboard',
    element: <CorretorDashboard />, // Rota para o dashboard do corretor
  },
  {
    path: '/corretor-perfil/:id', // Rota dinâmica com o ID do corretor
    element: <CorretorPerfil />,
  },
  {
    path: '/messages', // Rota para a página de mensagens
    element: <Mensagens />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
