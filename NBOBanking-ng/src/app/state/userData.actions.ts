import { createActionGroup, props } from "@ngrx/store";

export const UserDataActions = createActionGroup({
    source: 'User',
    events: {
        'Get Logged In Status': props<{ isLoggedInStatus: boolean }>(),
        'Get User Id': props<{ userId: number }>()
    }
});