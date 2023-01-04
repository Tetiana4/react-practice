import styled from '@emotion/styled';

export const Box = styled.div`
  display: block;
  text-align: center;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  height: 25px;
  border-color: #e3adc2;
  outline: none;
  &::placeholder {
    font-size: 11px;
    text-align: center;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 0 auto 10px;
  max-width: 400px;
`;
export const SearchButton = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  background: #eecdda;
  &:hover {
    opacity: 1;
  }
`;
