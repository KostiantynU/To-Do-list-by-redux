import styled from '@emotion/styled';

export const Container = styled.div`
  width: 85vw;
  height: 100vh;
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(240, 240, 240);
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

// export const TaskInformation = styled.div``;
export const TaskInformationParagraph = styled.p`
  font-size: 16px;
`;

export const FilterButtonsNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

export const AllBtn = styled.button`
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  transition: background 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 800ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  background: rgb(176, 176, 232);
  &:hover {
    background: rgb(122, 122, 245);
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.6) inset;
    -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.6) inset;
    -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.6) inset;
  }
`;
export const ActiveBtn = styled(AllBtn)`
  background: rgb(126, 237, 128);
  &:hover {
    background: rgb(76, 237, 79);
  }
`;
export const CompletedBtn = styled(AllBtn)`
  background: rgb(235, 157, 228);
  &:hover {
    background: rgb(242, 102, 230);
  }
`;
