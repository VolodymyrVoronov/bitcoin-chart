import styled from "styled-components";

const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 1200px;
  height: 100vh;

  margin: 0 auto;
  padding: 10px;
`;

const ErrorMessageTitle = styled.h1`
  display: flex;

  font-size: 36px;
  line-height: 40px;
  font-weight: 700;
`;

const ErrorMessageIcon = styled.span`
  display: flex;

  width: 150px;
  height: 150px;

  margin: 25px 0;

  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0OHY0OEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIyIDMwaDR2NGgtNHptMC0xNmg0djEyaC00em0xLjk5LTEwQzEyLjk0IDQgNCAxMi45NSA0IDI0czguOTQgMjAgMTkuOTkgMjBTNDQgMzUuMDUgNDQgMjQgMzUuMDQgNCAyMy45OSA0ek0yNCA0MGMtOC44NCAwLTE2LTcuMTYtMTYtMTZTMTUuMTYgOCAyNCA4czE2IDcuMTYgMTYgMTYtNy4xNiAxNi0xNiAxNnoiLz48L3N2Zz4=");
  background-size: contain;
`;

const ErrorMessageText = styled.p`
  display: flex;

  font-size: 26px;
  line-height: 30px;
  font-weight: 700;
`;

export {
  ErrorMessageContainer,
  ErrorMessageTitle,
  ErrorMessageIcon,
  ErrorMessageText,
};
