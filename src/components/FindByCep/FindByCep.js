import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
  Container,
  InputStyled,
  LabelStyled,
  ButtonStyled,
} from './FindByCep.styled';

function FindByCep() {
  const [cep, setCep] = useState();
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [UF, setUF] = useState('');

  useEffect(() => {
    Axios.get(`http://viacep.com.br/ws/${cep}/json/`).then((res) => {
      setCity(res.data.localidade);
      setAddress(res.data.logradouro);
      setUF(res.data.uf);
    });
  }, [cep]);

  const onSubmit = (e) => {
    e.preventDefault();
    setCep('');
    setCity('');
    setAddress('');
    setUF('');
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <div>
          <LabelStyled>
            <InputStyled
              maxlength="8"
              required
              placeholder="CEP"
              type="number"
              value={cep}
              onChange={(e) => {
                setCep(e.target.value);
                if (e.target.value.length > 8)
                  alert('Número máximo de 8 dígitos.');
              }}
            />
            <ButtonStyled type="submit">LIMPAR</ButtonStyled>
          </LabelStyled>

          <LabelStyled>Cidade: {city}</LabelStyled>
          <LabelStyled>Logradouro: {address}</LabelStyled>
          <LabelStyled>UF: {UF}</LabelStyled>
        </div>
      </form>
    </Container>
  );
}
export default FindByCep;
