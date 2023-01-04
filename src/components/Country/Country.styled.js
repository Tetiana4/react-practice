import styled from '@emotion/styled';
export const Box = styled.div`
  display: block;
  text-align: center;
`;
export const Form = styled.form`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 10px;
  max-width: 400px;
`;
export const Input = styled.input`
  height: 25px;
  border: 0;
  border-color: #7a3751;
  outline: none;
  &::placeholder {
    font-size: 11px;
    text-align: center;
  }
`;
export const SearchButton = styled.button`
  display: inline-block;
  width: 50px;
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
