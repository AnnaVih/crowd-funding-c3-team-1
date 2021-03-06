import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const StyledCard = styled.div`
  width: 374px;
  color: #5a5755;
  box-shadow: 0px 2px 2px #C7C4C2; 
  margin: 0 10px 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #fff;
`

export const StyledCardHeader = styled.div`
  height: 150px;
  img {
    height: 100%;
    width: 100%;
    border-bottom:1px solid #efebe9;
  }
`

export const StyledCardBody = styled.div`
  padding: 0 20px;
  font-weight: 300;
`

export const StyledCardFooter = styled.div`
  padding: 10px 20px;  
  border-top: 1px solid #efebe9;
`

export const CardFooterTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  text-align: center;
`

export const StyledCardDays = styled.div`
  color: #20b4e2;
`

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  progress {
    width: 100%;
    height:40px;
  }

  .progress-title {
    font-size: 12px;
  }

  .progress-amount {
    font-weight: 500;
  }
`

export const  StyledHeart = styled.div<{isFavourite: boolean}>`
  color:  ${({isFavourite}) => isFavourite ? "#800080" : "inherit"};
  cursor: pointer;
`

