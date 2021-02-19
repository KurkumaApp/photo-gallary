import styled from 'styled-components/macro';

export const Button = styled.button`
  display: inline-block;
  background-color: #4CAF50;
  border: 2px solid #4CAF50;
  text-decoration: none;
  padding: 10px;
  color: #FFEDE8;
  font-weight: 600;
  font-size: 14px;
  border-radius: 5px;
  margin-right: 10px;

  transition-duration: 0.4s;

  &:hover {
    background-color: #FFFFFF;
    color: #4CAF50;
    cursor: pointer;
  }
`;