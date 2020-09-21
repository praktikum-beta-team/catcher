import { user, auth } from "utils/request";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "store";

import { ISigninRequest, ISignupRequest } from "utils/request/auth";
import { authSuccess, authFailure, logoutSuccess, fetchUserSuccess } from "./slice";

export const fetchUserRequest = (): ThunkAction<void, RootState, null, AnyAction> => (dispatch) => {
  auth.user(
    {},
    ({ data }) => {
      dispatch(fetchUserSuccess(data));
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data : message;
      /**
       * TODO: продумать, что делать, если с бэкенда вернулась ошибка, возможно, разлогиниться
       */
      console.error(errorMessage);
    }
  );
};

export const signinRequest = (
  params: ISigninRequest
): ThunkAction<void, RootState, null, AnyAction> => (dispatch) => {
  auth.signin(
    params,
    () => {
      dispatch(authSuccess());
      dispatch(fetchUserRequest());
      localStorage.setItem("isAuthenticated", "true");
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;
      dispatch(authFailure(errorMessage));
    }
  );
};

export const logoutRequest = (): ThunkAction<void, RootState, null, AnyAction> => (dispatch) => {
  auth.logout(
    {},
    () => {
      dispatch(logoutSuccess());
      localStorage.clear();
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;
      console.error(errorMessage);
    }
  );
};

export const signupRequest = (
  params: ISignupRequest
): ThunkAction<void, RootState, null, AnyAction> => (dispatch) => {
  auth.signup(
    params,
    () => {
      dispatch(authSuccess());
      localStorage.setItem("isAuthenticated", "true");
    },
    ({ message, response }) => {
      const error = response ? response.data.reason : message;
      dispatch(authFailure(error));
    }
  );
};

export const changeAvatarRequest = (
  params: FormData
): ThunkAction<void, RootState, null, AnyAction> => (dispatch) => {
  user.changeAvatar(
    params,
    () => {
      dispatch(fetchUserRequest());
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;
      console.error(errorMessage);
    }
  );
};
