import styled from "styled-components"
import { ButtonType } from "../types"

export const StyledButton = styled.div<{type: ButtonType, isRounded: boolean, size: string}>`
  width: ${({size}) => size === "sm" ? "200px" : "300px"};
  height: ${({size}) => size === "sm" ? "50px" : "70px"};
  margin: ${({size}) => size === "sm" ? "10px 0" : "25px 0"};
  background-color: ${({type}) => type === "secondary" ? "#800080" : "inherit"};
  color: ${({type}) => type === "secondary" ? "#fff" : "#3a3434"};
  font-size: ${({size}) => size === "sm" ? "18px" : "30px"};
  line-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:  ${({isRounded}) => isRounded ? "40px" : "none"};
  border: ${({type}) => type === "primary" ? "1px solid #800080" : "none"};
  cursor: pointer;
  button {
    border:none;
    background: none;
    font-size: inherit;
    cursor: pointer;
    outline: none;
    width: 100%;
    height: 100%;
  }
  &.active {
    background-color: #800080;
    button {
      color: #fff;
    }
  }
`