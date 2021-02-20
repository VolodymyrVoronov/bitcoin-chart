import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 100vh;

  font-family: "Lato", "Roboto", "Arial", sans-serif;

  background-color: ${(props) => (props.isDarkModeOn ? `#292929` : `#ffffff`)};
  transition: 3s ease;
`;

export { AppContainer };
