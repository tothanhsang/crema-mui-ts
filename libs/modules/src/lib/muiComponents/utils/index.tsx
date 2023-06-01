import React from 'react';
import { RoutePermittedRole } from '@crema/constants/AppEnums';

const ClickawayListener = React.lazy(() => import('./ClickawayListener'));
const Modal = React.lazy(() => import('./Modal'));
const NoSSR1 = React.lazy(() => import('./NoSSR1'));
const Popover = React.lazy(() => import('./Popover'));
const Popper = React.lazy(() => import('./Popper'));
const Portal = React.lazy(() => import('./Portal'));
const Transitions = React.lazy(() => import('./Transitions'));
const MediaQuery = React.lazy(() => import('./MediaQuery'));
export {
  ClickawayListener,
  Modal,
  NoSSR1,
  Popover,
  Popper,
  Portal,
  Transitions,
  MediaQuery,
};
