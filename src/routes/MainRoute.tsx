import { MainPage } from '../pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { AuthenticatedRoute } from './AuthenticatedRoutes';
import { authRoutes } from './config';

export const MainRoute = () => {
  return (
    <Routes>
      (
      <>
        <Route path={AppRoutes.main} element={<MainPage />} />
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
