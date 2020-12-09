import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import { fetchLeaders } from "app/services/api";

import { actions } from "./slice";

const { fetchLeadersPending, fetchLeadersSuccess, fetchLeadersFailure } = actions;

const fetchLeadersRequest = (): ThunkAction<void, unknown, null, Action> => (dispatch) => {
  dispatch(fetchLeadersPending);

  fetchLeaders(
    {
      ratingFieldName: "score",
      cursor: 1,
      limit: 10,
    },
    ({ data }) => {
      dispatch(actions.fetchLeadersSuccess(data));
    },
    ({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;

      dispatch(actions.fetchLeadersFailure(errorMessage));
    }
  );
};

export { fetchLeadersRequest, fetchLeadersSuccess, fetchLeadersFailure };
