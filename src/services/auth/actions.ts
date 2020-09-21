import { auth as api } from "utils/request";
import { Dispatch } from "redux";

import { ISigninRequest, ISignupRequest } from "utils/request/auth";
import { authSuccess, authFailure, logoutSuccess, fetchUserSuccess } from "./slice";

export const fetchUserRequest = () => (dispatch: Dispatch) => {
  api.user(
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

export const signinRequest = (params: ISigninRequest) => (dispatch: Dispatch) => {
  api.signin(
    params,
    () => {
      dispatch(authSuccess());
      fetchUserRequest();
      localStorage.setItem("isAuthenticated", "true");
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;
      dispatch(authFailure(errorMessage));
    }
  );
};

export const logoutRequest = () => (dispatch: Dispatch) => {
  api.logout(
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

export const signupRequest = (params: ISignupRequest) => (dispatch: Dispatch) => {
  api.signup(
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
