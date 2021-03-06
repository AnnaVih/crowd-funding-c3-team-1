import styled from "styled-components"
import { ButtonType } from "../types"

export const StyledButton = styled.div<{type: ButtonType}>`
  width: 250px;
  height: 68px;
  margin-bottom: 25px;
  color: #000;
  background-color: ${({type}) => type === "secondary" ? "#C4C4C4" : "#fff"};
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: ${({type}) => type === "primary" ? "1px solid #000" : "none"};
  button {
    border:none;
    background: none;
    font-size: inherit;
  }
`