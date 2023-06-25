import { Container } from './Header/Header.styled';
import Header from './Header/Header';
import FilterForm from './FilterForm/FilterForm';
import { ListToDosStyled } from './ListToDos/ListToDos.styled';
export const App = () => {
  return (
    <Container>
      <Header />
      <main>
        <FilterForm />
        <ListToDosStyled />
      </main>
    </Container>
  );
};
