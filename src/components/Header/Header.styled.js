import styled from "styled-components";

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1200px;

  margin: 0 auto;
  padding: 10px;
`;

const ToggleContainer = styled.section`
  display: flex;
`;

const TimePeriodsContainer = styled.section`
  display: flex;
`;

export { AppHeader, ToggleContainer, TimePeriodsContainer };
