import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid black;
  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  height: 20px;
  font-size: 18px;
  padding: 3px;
  margin-top: 10px;
`;

export const SubmitBtn = styled.button`
  padding: 12px;
  font-weight: 700;
  color: #010101;
  background-color: white;

  outline: none;
`;
