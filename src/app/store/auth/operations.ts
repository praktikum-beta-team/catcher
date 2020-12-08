import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import type { ISigninRequest, ISignupRequest, IUserRequest } from "app/utils/request/types";
import { user, auth, yandex } from "app/utils/request";
import { actions } from "./slice";

export const fetchUserData = (): ThunkAction<void, unknown, null, AnyAction> => (dispatch) => {
  auth.user(
    null,
    ({ data }) => {
      dispatch(actions.fetchUserSuccess(data));
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;
      /**
       * TODO: обработать сетевую ошибку отлично от ошибки апи
       */
      dispatch(actions.authFailure(errorMessage));
    }
  );
};

export const signin = (params: ISigninRequest): ThunkAction<void, unknown, null, AnyAction> => (
  dispatch
) => {
  auth.signin(
    params,
    () => {
      dispatch(actions.authSuccess());
      dispatch(fetchUserData());
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;
      dispatch(actions.authFailure(errorMessage));
    }
  );
};

export const logout = (): ThunkAction<void, unknown, null, AnyAction> => (dispatch) => {
  auth.logout(
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

export const signup = (params: ISignupRequest): ThunkAction<void, unknown, null, AnyAction> => (
  dispatch
) => {
  auth.signup(
    params,
    () => {
      dispatch(actions.authSuccess());
      // localStorage.setItem("isAuthenticated", "true");
    },
    ({ message, response }) => {
      const error = response ? response.data.reason : message;
      dispatch(actions.authFailure(error));
    }
  );
};

export const changeUserData = (
  params: IUserRequest
): ThunkAction<void, unknown, null, AnyAction> => (dispatch) => {
  user.changeProfile(
    params,
    () => dispatch(actions.changeUserSuccess(params)),
    ({ response, message }) => {
      const errorMessage = response ? response.data.reason : message;
      dispatch(actions.changeUserFailure(errorMessage));
    }
  );
};

export const changeUserAvatar = (params: FormData): ThunkAction<void, unknown, null, AnyAction> => (
  dispatch
) => {
  user.changeAvatar(
    params,
    () => {
      dispatch(fetchUserData());
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;
      console.error(errorMessage);
    }
  );
};
