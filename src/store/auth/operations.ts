import { ThunkAction } from "redux-thunk";
import type { Action } from "redux";

import { api } from "services/api";
import type { ISignupRequest, ISigninRequest, IUserRequest } from "services/api";

import { actions } from "./slice";

const {
  authSuccess,
  authFailure,
  logoutSuccess,
  fetchUserDataSuccess,
  changeUserDataSuccess,
  changeUserDataFailure,
  clearError,
  setYaToken,
} = actions;

const fetchUserDataRequest = (): ThunkAction<void, unknown, null, Action> => (dispatch) => {
  api
    .fetchUserData()
    .then(({ data }) => {
      dispatch(fetchUserDataSuccess(data));
    })
    .catch(({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;

      dispatch(authFailure(errorMessage));
    });
};

const signupRequest = (data: ISignupRequest): ThunkAction<void, unknown, null, Action> => (
  dispatch
) => {
  api
    .signup({ data })
    .then(() => {
      dispatch(actions.authSuccess("API"));
      dispatch(fetchUserDataRequest());
    })
    .catch(({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;

      dispatch(actions.authFailure(errorMessage));
    });
};

const signinRequest = (data: ISigninRequest): ThunkAction<void, unknown, null, Action> => (
  dispatch
) => {
  api
    .signin({ data })
    .then(() => {
      dispatch(authSuccess("API"));
      dispatch(fetchUserDataRequest());
    })
    .catch(({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;

      dispatch(authFailure(errorMessage));
    });
};

const changeUserDataRequest = (data: IUserRequest): ThunkAction<void, unknown, null, Action> => (
  dispatch
) => {
  api
    .changeUserData({ data })
    .then(() => {
      dispatch(changeUserDataSuccess(data));
    })
    .catch(({ response, message }) => {
      const errorMessage = response ? response.data.reason : message;

      dispatch(changeUserDataFailure(errorMessage));
    });
};

const changeUserAvatarRequest = (data: FormData): ThunkAction<void, unknown, null, Action> => (
  dispatch
) => {
  api
    .changeUserAvatar({ data })
    .then(() => {
      dispatch(fetchUserDataRequest());
    })
    .catch(({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;

      console.error(errorMessage);
    });
};

const logoutRequest = (): ThunkAction<void, unknown, null, Action> => (dispatch) => {
  api
    .logout()
    .then(() => {
      dispatch(actions.logoutSuccess());
    })
    .catch(({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;

      /**
       * TODO: разлогинить пользователя
       */

      console.error(errorMessage);
    });
};

export {
  signinRequest,
  signupRequest,
  authSuccess,
  authFailure,
  logoutRequest,
  logoutSuccess,
  fetchUserDataRequest,
  fetchUserDataSuccess,
  changeUserDataRequest,
  changeUserDataSuccess,
  changeUserDataFailure,
  clearError,
  setYaToken,
  changeUserAvatarRequest,
};
