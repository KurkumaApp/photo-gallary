import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectDomain = (state: RootState) => state.photoGallary || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  photoGallaryState => photoGallaryState.loading,
);

export const selectError = createSelector(
  [selectDomain],
  photoGallaryState => photoGallaryState.error,
);

export const selectPhotos = createSelector(
  [selectDomain],
  photoGallaryState => photoGallaryState.photos,
);

export const selectButtonText = createSelector(
  [selectDomain],
  photoGallaryState => photoGallaryState.buttonText,
)