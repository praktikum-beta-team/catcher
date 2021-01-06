import type { IRootState } from "./configure-store";

import { initialState as auth } from "./auth/slice";

export const getInitialState = (): IRootState => {
  return {
    auth,
  };
};
