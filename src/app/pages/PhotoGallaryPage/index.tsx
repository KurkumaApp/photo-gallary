import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { usePhotoGallarySlice } from './slice'
import { selectPhotos, selectButtonText } from './slice/selectors';

import { PhotoGallaryItem } from './PhotoGallaryItem';

import { Button } from './components/Button';

export function PhotoGallaryPage() {
  const { actions } = usePhotoGallarySlice();

  const photos = useSelector(selectPhotos);
  const buttonText = useSelector(selectButtonText);

  const dispatch = useDispatch();

  function onClickButton() {
    dispatch(actions.loadPhotos());
  }

  

  return (
    <Wrapper>
      <Title>Photo gallary</Title>
      <Button onClick={onClickButton}>{buttonText}</Button>
      <PhotoGallaryList>
        {photos?.map(photo => (
          <PhotoGallaryItem
            key={photo.id}
            id={photo.id}
            username={photo.user.name}
            userProfileImage={photo.user.profile_image.small}
            description={photo.description}
            photoUrl={photo.urls.thumb}
          />
        ))}
      </PhotoGallaryList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 98px;
`;

const Title = styled.h1`
  margin: 15px 0;
  font-size: 36px;
  color: #444444;
`;

const PhotoGallaryList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 30px;
`;