import styled from "styled-components"


export const StyledNav = styled.ul`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 80px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 80%);
  background: #fcfbfb;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const StyledLi = styled.li`
  width: 25%;
  text-align: center;
  &.active {
    color: #50BD4E;
  }
`