import { ThunkAction } from "redux-thunk";
import type { Action } from "redux";

import { signin, signup, logout, fetchUserData } from "app/services/api/auth";
import { changeUserProfile, changeUserAvatar } from "app/services/api/users";
import type { ISigninRequest, ISignupRequest } from "app/services/api/auth";
import type { IUserRequest } from "app/services/api/users";

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
  fetchUserData(
    null,
    ({ data }) => {
      dispatch(fetchUserDataSuccess(data));
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;
      /**
       * TODO: обработать сетевую ошибку отлично от ошибки апи
       */
      dispatch(authFailure(errorMessage));
    }
  );
};

const signinRequest = (params: ISigninRequest): ThunkAction<void, unknown, null, Action> => (
  dispatch
) => {
  signin(
    params,
    () => {
      dispatch(authSuccess());
      // dispatch(fetchUserDataRequest());
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;
      dispatch(authFailure(errorMessage));
    }
  );
};

const logoutRequest = (): ThunkAction<void, unknown, null, Action> => (dispatch) => {
  logout(
    null,
    () => {
      dispatch(actions.logoutSuccess());
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;
      console.error(errorMessage);
    }
  );
};

const signupRequest = (params: ISignupRequest): ThunkAction<void, unknown, null, Action> => (
  dispatch
) => {
  signup(
    params,
    () => {
      dispatch(actions.authSuccess());
    },
    ({ message, response }) => {
      const error = response ? response.data.reason : message;
      dispatch(actions.authFailure(error));
    }
  );
};

const changeUserDataRequest = (params: IUserRequest): ThunkAction<void, unknown, null, Action> => (
  dispatch
) => {
  changeUserProfile(
    params,
    () => dispatch(actions.changeUserDataSuccess(params)),
    ({ response, message }) => {
      const errorMessage = response ? response.data.reason : message;
      dispatch(actions.changeUserDataFailure(errorMessage));
    }
  );
};

const changeUserAvatarRequest = (params: FormData): ThunkAction<void, unknown, null, Action> => (
  dispatch
) => {
  changeUserAvatar(
    params,
    () => {
      dispatch(fetchUserDataRequest());
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;
      console.error(errorMessage);
    }
  );
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
