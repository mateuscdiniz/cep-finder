import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  color: grey;
  text-decoration: none;
`;

export const TextStyled = styled.div`
  margin-top: 20px;
  color: grey;
  font-weight: 500;
  font-size: 30px;
  text-decoration: none;
`;

export const LinkStyled = styled(Link)`
  font-size: 50px;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
