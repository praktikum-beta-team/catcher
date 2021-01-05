import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import { api } from "app/services/api";
import type { ILeaderboardRequest } from "app/services/api";

import { actions } from "./slice";

const { fetchLeadersPending, fetchLeadersSuccess, fetchLeadersFailure } = actions;

const fetchLeadersRequest = (): ThunkAction<void, unknown, null, Action> => (dispatch) => {
  const testData: ILeaderboardRequest = {
    ratingFieldName: "score",
    cursor: 1,
    limit: 10,
  };

  dispatch(fetchLeadersPending);
  api
    .featchLeaders({ data: testData })
    .then(({ data }) => {
      dispatch(actions.fetchLeadersSuccess(data));
    })
    .catch(({ message, response }) => {
      const errorMessage = response ? response.data.reason : message;

      dispatch(actions.fetchLeadersFailure(errorMessage));
    });
};

export { fetchLeadersRequest, fetchLeadersSuccess, fetchLeadersFailure };
