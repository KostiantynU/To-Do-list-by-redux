import styled from '@emotion/styled';
export const ListToDosItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  &:nth-child(2n) {
    background-color: rgb(227, 227, 227);
  }
`;
export const CheckboxStyled = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  &:checked {
    color: white;
    background-color: black;
  }
`;
export const LabelStyled = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
