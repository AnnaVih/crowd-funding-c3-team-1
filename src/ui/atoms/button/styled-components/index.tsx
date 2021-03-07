import styled from "styled-components"
import { ButtonType } from "../types"

export const StyledButton = styled.div<{styleType: ButtonType, rounded: string, size: string, name: string}>`
  width: ${({size}) => size === "sm" ? "200px" : "300px"};
  height: ${({size}) => size === "sm" ? "50px" : "70px"};
  margin: ${({size}) => size === "sm" ? "10px 0" : "25px 0"};
  background-color: ${({styleType}) => styleType === "secondary" ? "#800080" : "inherit"};
  color: ${({styleType}) => styleType === "secondary" ? "#fff" : "#3a3434"};
  font-size: ${({size}) => size === "sm" ? "18px" : "30px"};
  line-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:  ${({rounded}) => rounded === "all" ? "40px" : "none"};
  border-top-left-radius: ${({rounded}) => rounded === "left" ? "25px" : "none" };
  border-bottom-left-radius: ${({rounded}) => rounded === "left" ? "25px" : "none" };
  border-top-right-radius: ${({rounded}) => rounded === "right" ? "25px" : "none" };
  border-bottom-right-radius: ${({rounded}) => rounded === "right" ? "25px" : "none" };
  border: ${({styleType}) => styleType === "primary" ? "1px solid #800080" : "none"};
  cursor: pointer;

  &.active {
    background-color: #800080;
    button {
      color: #fff;
    }
  }
`