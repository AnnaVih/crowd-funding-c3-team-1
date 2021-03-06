import styled from "styled-components"

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`

export const  Centered = styled.div`
  position: absolute;
  width: 300px;
  z-index: 15;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -150px;

`

export const HomeWrapper = styled(FlexBox)`
  margin-top: 80px;
`
