import styled from 'styled-components';

export const Container = styled.div`
  width: 100vh;
  height: 50vh;
  margin-left: 90vh;
  margin-top: 20vh;
  font-weight: 500;
  font-size: 50px;
`;

export const InputStyled = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  background-color: #282c34;
  color: white;
  padding: 8px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 4px;
  border: 2px solid grey;
`;

export const LabelStyled = styled.div`
  -webkit-appearance: none;
  margin: 0;
  opacity: 1;
  margin-top: 20px;
  font-weight: 500;
  font-size: 22px;
`;

export const ButtonStyled = styled.button`
  color: grey;
  border-radius: 4px;
  padding: 8px;
  margin-left: 10px;
  border: 2px solid grey;
  background-color: #282c34;
  font-weight: 500;
  font-size: 16px;
`;
