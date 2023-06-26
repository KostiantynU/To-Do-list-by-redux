import { useMyContext } from 'components/myContext';
import { ListToDosItemStyled, CheckboxStyled, LabelStyled } from './ListToDosItem.styled';
import { SubmitBtnStyled } from 'components/FilterForm/FilterForm.styled';
function ListToDosItem({ toDo, id }) {
  const { deleteTask } = useMyContext();
  return (
    <ListToDosItemStyled>
      <LabelStyled>
        <CheckboxStyled type="checkbox" />
        <p>{toDo} </p>
      </LabelStyled>
      <SubmitBtnStyled type="button" delete={'delete'} data-id={id} onClick={deleteTask}>
        Delete
      </SubmitBtnStyled>
    </ListToDosItemStyled>
  );
}
export default ListToDosItem;
