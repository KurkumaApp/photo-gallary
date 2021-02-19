import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { photoGallaryActions as actions } from '.';
import { Photo } from 'types/Photo';

export function* getPhotos() {
  yield delay(500);

  const requestURL = `https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`;

  try {
    const photos: Photo[] = yield call(request, requestURL);
    if (photos?.length > 0) {
      yield put(actions.photosLoaded(photos));
    } else {
    }
  } catch (err) {
    if (err.response?.status === 404) {
    } else if (err.message === 'Failed to fetch') {
    } else {
    }
  }
}

export function* PhotoGallarySaga() {
  yield takeLatest(actions.loadPhotos.type, getPhotos);
}