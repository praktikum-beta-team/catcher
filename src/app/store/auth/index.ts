import * as authOperations from "./operations";
import * as authSelectors from "./selectors";
import { reducer } from "./slice";

export type { IAuthSliceState } from "./slice";
export { authOperations, authSelectors };
export default reducer;
