import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Container,
  InputStyled,
  LabelStyled,
  ButtonStyled,
  FormGroupStyled,
  CEPStyled,
} from './FindByAddress.styled';

function FindByAddress() {
  const [cep, setCep] = useState();
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [UF, setUF] = useState('');

  useEffect(() => {
    Axios.get(`http://viacep.com.br/ws/${UF}/${city}/${address}/json/`).then(
      (res) => {
        setCep(res.data[0].cep);
        console.log(res.data[0].cep);
      }
    );
  }, [UF]);

  const handleClick = (e) => {
    e.preventDefault();
    setCep('');
    setCity('');
    setAddress('');
    setUF('');
  };

  return (
    <Container>
      <form>
        <div>
          <FormGroupStyled>
            <LabelStyled>
              <InputStyled
                type="text"
                placeholder="RUA"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </LabelStyled>
          </FormGroupStyled>
          <FormGroupStyled>
            <LabelStyled>
              <InputStyled
                type="text"
                placeholder="CIDADE"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </LabelStyled>
          </FormGroupStyled>
          <FormGroupStyled>
            <LabelStyled>
              <InputStyled
                maxlength="2"
                placeholder="UF"
                type="text"
                value={UF}
                onChange={(e) => setUF(e.target.value)}
              />
            </LabelStyled>

            <ButtonStyled type="submit" onClick={handleClick}>
              LIMPAR
            </ButtonStyled>
            <CEPStyled>CEP : {cep}</CEPStyled>
          </FormGroupStyled>
        </div>
      </form>
    </Container>
  );
}
export default FindByAddress;
