import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectUserId = createFeatureSelector<Readonly<number>>("userId");
export const selectIsLoggedInStatus = createFeatureSelector<Readonly<boolean>>("isLoggedInStatus");

export const selectUserData = createSelector(
    selectUserId,
    selectIsLoggedInStatus,
    (userId, isLoggedInStatus) => {
        return 
    }
);