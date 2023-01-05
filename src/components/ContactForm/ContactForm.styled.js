import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 40px;
  color: #1976d2;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const Text = styled.span`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  height: 40px;
  width: 400px;
  padding: 0 10px 0 10px;
  &::placeholder {
    font-size: 14px;
  }
  outline: thin dashed #1976d2;
`;

export const AddContactBtn = styled.button`
  margin-left: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  background-color: #1976d2;
  color: white;
  font-size: 15px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: orange;
    color: white;
  }
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
