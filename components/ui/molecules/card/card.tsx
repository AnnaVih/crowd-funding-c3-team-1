import React from 'react'
import Link from "next/link"
import { Button } from "../../atoms/button"
import { StyledCardHeader, StyledCard, StyledCardBody, StyledCardFooter, CardFooterTitle, FlexBox, StyledCardDays } from "./styled-components"

export const Card = ({
  title,
  type,
  days,
  total,
  leftToInvest,
  imagePath,
  linkTo
}: {
  title: string
  type: string,
  days: number,
  total: number,
  leftToInvest: number,
  imagePath: string
  linkTo: string
}) => {
  const [investType, setInvestType] = React.useState(null)
  
  const onInvestHandler = (type: string) => {
    setInvestType(type)
  }
  
  return (
    <StyledCard>
      <StyledCardHeader>
        <img src={imagePath} alt={title}/>
      </StyledCardHeader>
      <StyledCardBody>
        <FlexBox>
          <Link href={linkTo}><a><h2>{title}</h2></a></Link>
          <StyledCardDays> {days} days to go</StyledCardDays>
        </FlexBox>
        <FlexBox>
          <h5>{total}</h5>
          <h5>{leftToInvest}</h5>
        </FlexBox>
        <FlexBox>
          <span>#{type}</span>
          <FlexBox>
            <div>S</div>
            <div>l</div>
          </FlexBox>
        </FlexBox>
      </StyledCardBody>
      <StyledCardFooter>
        <CardFooterTitle>Invest on this project</CardFooterTitle>
        <FlexBox>
          <Button onClick={() => onInvestHandler("reward")} size="sm" className={investType === "reward" ? "active": ""} isRounded={false} name="Reward" type="primary"/>
          <Button onClick={() => onInvestHandler("equity")}  size="sm" className={investType === "equity" ? "active": ""} isRounded={false} name="Equity" type="primary"/>
        </FlexBox>
      </StyledCardFooter>
    </StyledCard>
  )
}