import { FormStyled, InputStyled, SubmitBtnStyled } from './FilterForm.styled';
function FilterForm() {
  return (
    <FormStyled>
      <InputStyled type="text" placeholder="Enter a text..." />
      <SubmitBtnStyled type="submit">Add</SubmitBtnStyled>
    </FormStyled>
  );
}
export default FilterForm;
