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

export const StyledDetails = styled.div`
  margin: 0 40px;
  img {
    width: 100%;
  }
`

export const MapImageWrapper = styled.div`
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
  }
`

export const StyledExploreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 100px;
`