import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  username: string,
  userProfileImage: string,
  description: string | null,
  photoUrlThumb: string,
  photoUrlFull: string
}

export function PhotoGallaryItem({
  username,
  userProfileImage,
  description,
  photoUrlThumb,
  photoUrlFull
}: Props) {
  return (
    <Wrapper>
      <UserProfile>
        <UserProfileImage src={userProfileImage} />
        <UserProfileName>{username}</UserProfileName>
      </UserProfile>
      <Link href={photoUrlFull} target='_blank'>
        <Photo src={photoUrlThumb} />
      </Link>
      <Description>{description === null ? 'No description :(' : description}</Description>
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

const Link = styled.a`

`;

const Photo = styled.img`
  border-radius: 5px;

  transition-duration: 0.4s;

  &:hover {
    opacity: .5;
    cursor: pointer;
  }
`;

const Description = styled.p`
  margin-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;