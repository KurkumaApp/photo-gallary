import { Photo } from 'types/Photo';

export interface PhotoGalleryState {
  loading: boolean,
  buttonText: string,
  error?: string | null,
  photos: Photo[]
}

export type ContainerState = PhotoGalleryState;