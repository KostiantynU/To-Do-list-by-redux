import { useMyContext } from 'components/myContext';
import {
  HeaderStyled,
  TaskInformationParagraph,
  FilterButtonsNavigation,
  AllBtn,
  ActiveBtn,
  CompletedBtn,
} from './Header.styled';

function Header() {
  const { activeTasks, completedTasks, clickOnBtn } = useMyContext();

  return (
    <HeaderStyled>
      <div>
        <h2>Tasks</h2>
        <TaskInformationParagraph>Active: {activeTasks}</TaskInformationParagraph>
        <TaskInformationParagraph>Completed: {completedTasks}</TaskInformationParagraph>
      </div>
      <div>
        <h2>Filter by status</h2>
        <FilterButtonsNavigation>
          <AllBtn id={'all'} type="button" onClick={clickOnBtn}>
            All
          </AllBtn>
          <ActiveBtn id="active" type="button" onClick={clickOnBtn}>
            Active
          </ActiveBtn>
          <CompletedBtn id={'completed'} type="button" onClick={clickOnBtn}>
            Completed
          </CompletedBtn>
        </FilterButtonsNavigation>
      </div>
    </HeaderStyled>
  );
}
export default Header;
