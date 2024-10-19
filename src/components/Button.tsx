import styled, { css } from 'styled-components';

type ButtonPropsType = {
  outline?: boolean;
};

const Button = styled.button<ButtonPropsType>`
  cursor: pointer;
  min-width: 86px;
  font-size: 10px;
  font-weight: 700;
  font-family: inherit;
  padding: 3px 16px;
  color: white;
  background-color: #4e71fe;
  border: 2px solid transparent;
  border-radius: 5px;

  ${(props) =>
    props.outline &&
    css<ButtonPropsType>`
      background-color: transparent;
      color: #4e71fe;
      border: 2px solid #4e71fe;
    `}
`;

export { Button };
