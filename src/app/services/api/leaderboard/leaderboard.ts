import { request } from "app/utils";
import { LEADERBOARD, LEADERBOARD_ALL } from "app/constants/api";

import type { ILeaderboardRequest, ILeaderboardNewLeaderRequest } from "./types";

export const fetchLeaders = request<ILeaderboardRequest>(LEADERBOARD_ALL);

export const addUserToLeaderboard = request<ILeaderboardNewLeaderRequest>(LEADERBOARD);
