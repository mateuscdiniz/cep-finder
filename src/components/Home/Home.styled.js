import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vh;
  height: 50vh;
  margin-left: 60vh;
  margin-top: 20vh;
  font-weight: 500;
`;

export const TextStyled = styled.div`
  font-size: 16;
  margin-top: 20px;
`;

export const TitleStyled = styled.div`
  font-size: 50px;
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

export const ButtonStyled = styled.div`
  font-size: 22px;
  color: grey;
  border: 1px solid black;
  padding: 10px;
  text-decoration: none;
  border-radius: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 80px;
  margin-top: 80px;
`;
