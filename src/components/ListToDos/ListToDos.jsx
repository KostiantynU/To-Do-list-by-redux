import { ListToDosStyled } from './ListToDos.styled';
import ListToDosItem from 'components/ListToDosItem/ListToDosItem';
import { useMyContext } from 'components/myContext';

function ListToDos() {
  const { taskArray } = useMyContext();
  return (
    <ListToDosStyled>
      {taskArray.map(({ id, toDo }) => (
        <ListToDosItem key={id} id={id} toDo={toDo} />
      ))}
    </ListToDosStyled>
  );
}
export default ListToDos;
