import styled, { css } from "styled-components";

const TimePeriodsContainer = styled.div`
  display: flex;
`;

const TimePeriod = styled.button`
  display: flex;

  margin: 0 2px;
  padding: 8px 25px;

  font-size: 20px;
  line-height: 22px;
  font-weight: 500;
  color: ${(props) => (props.activeTime ? `#ffffff` : `#000000`)};

  background-color: ${(props) =>
    props.activeTime ? `#69c7ff` : `transparent`};

  border-radius: 25px;

  transition: 0.3s ease;

  outline: none;
  border: none;

  ${(props) =>
    props.isDisabled
      ? null
      : css`
          &:hover {
            color: #ffffff;

            cursor: pointer;

            background-color: #69c7ff;

            transition: 0.3s ease;
          }
        `}

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export { TimePeriodsContainer, TimePeriod };
