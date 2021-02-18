import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  color: #FF0000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;