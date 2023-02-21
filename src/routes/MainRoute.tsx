import { Login } from '../pages/Login';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { AuthenticatedRoute } from './AuthenticatedRoutes';
import { authRoutes } from './config';
import { SignUp } from '../pages/SignUp';

export const MainRoute = () => {
  return (
    <Routes>
      (
      <>
        <Route path={AppRoutes.login} element={<Login/>} />
        <Route path={AppRoutes.register} element={<SignUp/>} />

        {authRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<AuthenticatedRoute component={element} />}
          />
        ))}
      </>
      )
    </Routes>
  );
};
