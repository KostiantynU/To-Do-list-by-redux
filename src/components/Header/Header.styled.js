import styled from '@emotion/styled';

export const Container = styled.div`
  width: 85vw;
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
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
  padding: 5px 15px;
  background: rgb(176, 176, 232);
  &:hover {
    background: rgb(122, 122, 245);
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
