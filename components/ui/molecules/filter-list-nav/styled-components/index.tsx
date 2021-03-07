import styled from "styled-components"


export const FilterList = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 50px;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 80%);
  background: #fcfbfb;
  margin: 0;
  padding: 0;
`

export const FilterListButton = styled.button`
  font-size: 20px;
  line-height: 45px;
  &.active {
    background-color: #800080;
    color: white !important;  
` 