import { FormStyled, InputStyled, SubmitBtnStyled } from './FilterForm.styled';
import { useMyContext } from 'components/myContext';
function FilterForm() {
  const { inputValue, changeInputValue, handleSubmit } = useMyContext();
  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        name="toDo"
        type="text"
        placeholder="Enter a text..."
        value={inputValue}
        onChange={changeInputValue}
      />
      <SubmitBtnStyled type="submit">Add</SubmitBtnStyled>
    </FormStyled>
  );
}
export default FilterForm;
