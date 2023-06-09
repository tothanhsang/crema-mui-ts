import React from 'react';
import { Navigate } from 'react-router-dom';

import { authRouteConfig } from './AuthRoutes';
import Error403 from '../../modules/errorPages/Error403';
import { errorPagesConfigs } from './ErrorPagesRoutes';
import { dashBoardConfigs } from './DashboardsRoutes';
import { extraPagesConfigs } from './ExtraPagesRoutes';
import { userListConfig } from './UserListRoutes';
import { userPagesConfig } from './UserPagesRoutes';
import { appsConfig } from './AppsRoutes';
import { ecommerceConfig } from './EcommerceRoutes';
import { muiComponentConfigs } from './MUIComponents';
import { thirdPartyConfigs } from './ThirdPartyRoutes';
import { accountPagesConfigs } from './AccountRoutes';
import { initialUrl } from '@crema/constants/AppConst';

const authorizedStructure = {
  fallbackPath: '/signin',
  unAuthorizedComponent: <Error403 />,
  routes: [
    ...dashBoardConfigs,
    ...accountPagesConfigs,
    ...appsConfig,
    ...ecommerceConfig,
    ...muiComponentConfigs,
    ...thirdPartyConfigs,
    ...extraPagesConfigs,
    ...userPagesConfig,
    ...userListConfig,
  ],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
};
const anonymousStructure = {
  routes: errorPagesConfigs.concat([
    {
      path: '/',
      element: <Navigate to={initialUrl} />,
    },
    {
      path: '*',
      element: <Navigate to="/error-pages/error-404" />,
    },
  ]),
};

export { authorizedStructure, unAuthorizedStructure, anonymousStructure };
