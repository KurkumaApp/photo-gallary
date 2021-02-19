import { PayloadAction } from '@reduxjs/toolkit';
import { Photo } from 'types/Photo';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { PhotoGallarySaga } from './saga';
import { PhotoGalleryState } from "./types";

export const initialState: PhotoGalleryState = {
  loading: false,
  error: null,
  photos: [],
  buttonText: 'Download photos'
}

const slice = createSlice({
  name: 'photoGallary',
  initialState,
  reducers: {
    loadPhotos(state) {
      state.loading = true;
      state.error = null;
      state.photos = [];
      state.buttonText = 'Downloading...'
    },
    photosLoaded(state, action: PayloadAction<Photo[]>) {
      const photos = action.payload;
      state.photos = photos;
      state.loading = false;
      state.buttonText = 'Refresh photos'
    },
  },
});

export const { actions: photoGallaryActions, reducer } = slice;

export const usePhotoGallarySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: PhotoGallarySaga });
  return { actions: slice.actions };
};