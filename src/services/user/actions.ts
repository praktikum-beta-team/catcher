import { auth as api } from "utils/request";
import { Dispatch } from "redux";

import { fetchUserDataSuccess } from "./slice";

export const fetchUserData = () => (dispatch: Dispatch) => {
  api.user({}, ({ data }) => dispatch(fetchUserDataSuccess(data)));
};
