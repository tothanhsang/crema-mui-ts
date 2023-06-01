import {
  CommonActionTypes,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  HIDE_MESSAGE,
  SHOW_MESSAGE,
  TOGGLE_APP_DRAWER,
} from '@crema/actions/Common.action';

export const fetchStart = (): CommonActionTypes => ({ type: FETCH_START });

export const fetchSuccess = (): CommonActionTypes => ({ type: FETCH_SUCCESS });

export const fetchError = (error: string): CommonActionTypes => ({
  type: FETCH_ERROR,
  payload: error,
});

export const showMessage = (message: string): CommonActionTypes => ({
  type: SHOW_MESSAGE,
  payload: message,
});

export const onToggleAppDrawer = (): CommonActionTypes => ({
  type: TOGGLE_APP_DRAWER,
});

export const hideMessage = (): CommonActionTypes => ({ type: HIDE_MESSAGE });
