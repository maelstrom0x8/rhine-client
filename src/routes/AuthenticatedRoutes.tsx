import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AppRoutes } from './AppRoutes';

type AuthenticatedRouteType = {
  component: React.ReactNode;
};

export const AuthenticatedRoute = ({ component }: AuthenticatedRouteType) => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated());
  
  if(!isAuthenticated()) {
		return <Navigate to={AppRoutes.login} />;
	}

	return( <>
		{component}
	</>);

};
