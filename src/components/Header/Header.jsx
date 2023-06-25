import {
  HeaderStyled,
  TaskInformationParagraph,
  FilterButtonsNavigation,
  AllBtn,
  ActiveBtn,
  CompletedBtn,
} from './Header.styled';
function Header() {
  return (
    <HeaderStyled>
      <div>
        <h2>Tasks</h2>
        <TaskInformationParagraph>Active: </TaskInformationParagraph>
        <TaskInformationParagraph>Completed: </TaskInformationParagraph>
      </div>
      <div>
        <h2>Filter by status</h2>
        <FilterButtonsNavigation>
          <AllBtn type="button">All</AllBtn>
          <ActiveBtn type="button">Active</ActiveBtn>
          <CompletedBtn type="button">Completed</CompletedBtn>
        </FilterButtonsNavigation>
      </div>
    </HeaderStyled>
  );
}
export default Header;
