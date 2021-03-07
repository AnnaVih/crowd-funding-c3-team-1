import React from 'react'
import Link from "next/link"
import { Button } from "../../atoms/button"
import { StyledCardHeader, StyledCard, StyledCardBody, StyledCardFooter, CardFooterTitle, FlexBox, StyledCardDays, StyledHeart } from "./styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Card = ({
  title,
  type,
  days,
  total,
  leftToInvest,
  imagePath,
  linkTo,
  isFavourite,
  onClick,
  id
}: {
  title: string
  type: string
  days: number
  total: number
  leftToInvest: number
  imagePath: string
  linkTo: string
  isFavourite: boolean
  onClick: (projectId) => void
  id: string
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
          <StyledCardDays> {days} days left</StyledCardDays>
        </FlexBox>
        <FlexBox>
          <span className="progress-title">  
            <span className="progress-amount">&pound;{total - leftToInvest}</span> raised of <span className="progress-amount">&pound;{total}</span>
          </span>
          <span className="progress-title">Remaining: &pound;{leftToInvest}</span>
        </FlexBox>
        <FlexBox>
          <progress value={total - leftToInvest} max={total} > текст</progress>
        </FlexBox>

        <br/>
        <FlexBox>
          <span>{type}</span>
          <FlexBox>
            <div><FontAwesomeIcon icon={faShareAlt} /> &nbsp; &nbsp; &nbsp;</div>
            <StyledHeart onClick={() => onClick(id)} isFavourite={isFavourite}><FontAwesomeIcon icon={faHeart} /></StyledHeart>
          </FlexBox>
        </FlexBox>
        <br/>
      </StyledCardBody>
      <StyledCardFooter>
        <CardFooterTitle>Invest on this project</CardFooterTitle>
        <FlexBox>
          <Button onClick={() => onInvestHandler("reward")} size="sm" className={investType === "reward" ? "active" : ""} isRounded={false} name="Reward" type="primary"/>
          <Button onClick={() => onInvestHandler("equity")}  size="sm" className={investType === "equity" ? "active": ""} isRounded={false} name="Equity" type="primary"/>
        </FlexBox>
      </StyledCardFooter>
    </StyledCard>
  )
}