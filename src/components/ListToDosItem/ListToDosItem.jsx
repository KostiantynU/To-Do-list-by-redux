import { useMyContext } from 'components/myContext';
import PropTypes from 'prop-types';
import { ListToDosItemStyled, CheckboxStyled, LabelStyled } from './ListToDosItem.styled';
import { SubmitBtnStyled } from 'components/FilterForm/FilterForm.styled';

function ListToDosItem({ toDo, id, checked }) {
  const { deleteTask, handleChecked } = useMyContext();
  return (
    <ListToDosItemStyled>
      <LabelStyled className={checked ? 'checked' : ''}>
        <CheckboxStyled type="checkbox" onChange={handleChecked} data-id={id} />
        <p>{toDo} </p>
      </LabelStyled>
      <SubmitBtnStyled type="button" delete={'delete'} data-id={id} onClick={deleteTask}>
        Delete
      </SubmitBtnStyled>
    </ListToDosItemStyled>
  );
}
export default ListToDosItem;

ListToDosItem.propTypes = {
  toDo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
};
