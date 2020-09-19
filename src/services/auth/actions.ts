import { auth as api } from "utils/request";
import { Dispatch } from "redux";

import { signinSuccess, signinError, logoutSuccess } from "./slice";

// TODO: нормально типизировать
export const signinRequest = (params: { login: string; password: string }) => (
  dispatch: Dispatch
) => {
  api.signin(
    params,
    () => dispatch(signinSuccess()),
    ({ message, response }) => {
      const error = response ? response.data.reason : message;
      dispatch(signinError(error));
    }
  );
};

export const logoutRequest = () => (dispatch: Dispatch) => {
  api.logout(
    {},
    () => dispatch(logoutSuccess()),
    ({ message, response }) => {
      const error = response ? response.data.reason : message;
      console.error(error);
    }
  );
};
