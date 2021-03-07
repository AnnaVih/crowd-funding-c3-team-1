import React from 'react'
import { Card } from '../../components/ui/molecules/card'
import { StyledExploreList } from "../../styles/styled-components"
import { FooterNavigation } from '../../components/ui/molecules/footer-navigation'

export const dummyData = [
  {
    id: "crowdfunding-platforms",
    img: 'images/crowdfunding.jpg',
    title: "Crowdfunding",
    description: "Crowdfunding platforms description test",
    days: 20,
    total: 600,
    leftToInvest: 100,
    type: "Crowdfunding"
  },
  {
    id: "obtaining-financing",
    img: 'images/finance.jpg',
    description: "Obtaining Financing description test",
    days: 20,
    total: 600,
    leftToInvest: 100,
    title: "IT",
    type: "Crowdfunding"
  },
  {
    id: "obtaining-financing-two",
    img: 'images/test.jpeg',
    days: 10,
    total: 800,
    leftToInvest: 200,
    title: 'Financing',
    type: "Financing"
  },
  {
    id: "glossary",
    img: 'images/glossary.jpg',
    title: 'Glossary',
    days: 4,
    total: 1000,
    leftToInvest: 500,
    type: "Media"
  },
  {
    id:"networking",
    img: 'images/networking.jpg',
    title: 'Networking',
    days: 22,
    total: 22000,
    leftToInvest: 1100,
    type: "Networking"
  }
]

const Explore = () => {
  return (
    <>
      <StyledExploreList>
        {dummyData.map(({id, title, days, total, type, img, leftToInvest}) => {
          return <Card days={days} total={total} type={type} leftToInvest={leftToInvest} linkTo={`/explore/${id}`} title={title} key={id} imagePath={img}/>
        })}
      </StyledExploreList>
      <FooterNavigation />
    </>
  )
}

export default Explore