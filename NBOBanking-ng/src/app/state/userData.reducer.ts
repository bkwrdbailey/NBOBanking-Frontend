import { createReducer, on } from "@ngrx/store";
import { UserDataActions } from "./userData.actions";

export const initialUserIdState: number = 0;
export const initialLoggedInStatus: boolean = false;

export const userIdDataReducer = createReducer(
    initialUserIdState,
    on(UserDataActions.getUserId, (_state, { userId }) => userId)
);

export const userLoggedInStatusDataReducer = createReducer(
    initialLoggedInStatus,
    on(UserDataActions.getLoggedInStatus, (_state, { isLoggedInStatus }) => isLoggedInStatus)
);