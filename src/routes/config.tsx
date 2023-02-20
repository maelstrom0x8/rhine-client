import { Login } from '../pages/LoginPage/Login';
import { SignUp } from '../pages/SignUpPage/SignUp';
import { AppRoutes } from './AppRoutes';

export const authRoutes = [
  {
    path: AppRoutes.register,
    element: <SignUp />,
  },

  {
    path: AppRoutes.login,
    element: <Login />,
  },
];
