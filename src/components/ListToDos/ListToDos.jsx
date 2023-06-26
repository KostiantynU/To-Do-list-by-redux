import { ListToDosStyled } from './ListToDos.styled';
import ListToDosItem from 'components/ListToDosItem/ListToDosItem';
import { useMyContext } from 'components/myContext';

function ListToDos() {
  const { filteredStateArray } = useMyContext();
  return (
    <ListToDosStyled>
      {filteredStateArray.map(({ id, toDo, checked }) => (
        <ListToDosItem key={id} id={id} toDo={toDo} checked={checked} />
      ))}
    </ListToDosStyled>
  );
}
export default ListToDos;
