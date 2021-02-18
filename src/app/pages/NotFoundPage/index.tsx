import * as React from 'react';
import styled from 'styled-components/macro';

import { Link } from 'app/components/Link';

import { P } from './components/P';

export function NotFoundPage() {
  return (
    <>
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <P>Page not found.</P>
        <Link to={'/'}>Return to Home Page</Link>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: #444444;
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;