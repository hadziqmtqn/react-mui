import { Navigate } from 'react-router-dom';

interface GuestRouteProps {
  children: React.ReactNode;
}

export default function GuestRoute({ children }: GuestRouteProps) {
  const token = localStorage.getItem('token');
  if (token) {
    // Sudah login, redirect ke dashboard
    return <Navigate to="/" replace />;
  }
  // Belum login, render halaman guest (signin/register)
  return <>{children}</>;
}