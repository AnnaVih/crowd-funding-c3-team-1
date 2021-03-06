import styled from "styled-components"
import { ButtonType } from "../types"

export const StyledButton = styled.div<{type: ButtonType}>`
  width: 300px;
  height: 68px;
  margin: 25px 0;
  color: #3a3434;
  background-color: ${({type}) => type === "secondary" ? "#C4C4C4" : "#fff"};
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: ${({type}) => type === "primary" ? "1px solid #b5b1b1" : "none"};
  button {
    border:none;
    background: none;
    font-size: inherit;
  }
`