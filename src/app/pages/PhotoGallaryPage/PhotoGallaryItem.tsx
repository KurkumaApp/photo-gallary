import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  id: string,
  username: string,
  userProfileImage: string,
  description: string | null,
  photoUrl: string
}

export function PhotoGallaryItem({
  id,
  username,
  userProfileImage,
  description,
  photoUrl
}: Props) {
  return (
    <Wrapper>
      <UserProfile>
        <UserProfileImage src={userProfileImage} />
        <UserProfileName>{username}</UserProfileName>
      </UserProfile>
      <Photo src={photoUrl} />
      <Description>{description}</Description>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  display: block;
  width: 200px;
  margin-bottom: 15px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UserProfileImage = styled.img`
  border-radius: 50px;
  margin-left: 10px;
  margin-right: 10px;
`;

const UserProfileName = styled.span`
  font-size: 13px;
`;

const Photo = styled.img`
  border-radius: 5px;

  transition-duration: 0.4s;

  &:hover {
    opacity: .7;
    cursor: pointer;
  }
`;

const Description = styled.p`
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;