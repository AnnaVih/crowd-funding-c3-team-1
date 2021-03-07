import React from 'react'
import { Card } from '../../components/ui/molecules/card'
import { StyledExploreList } from "../../styles/styled-components"
import { FooterNavigation } from '../../components/ui/molecules/footer-navigation'

export const dummyData = [
  {
    id: "crowdfunding-platforms",
    img: 'images/crowdfunding.jpg',
    title: "Crowdfunding Platforms",
    description: "Crowdfunding platforms description test"
  },
  {
    id: "obtaining-financing",
    img: 'images/finance.jpg',
    title: 'Obtaining Financing',
    description: "Obtaining Financing description test"

  },
  {
    id: "glossary",
    img: 'images/glossary.jpg',
    title: 'Glossary',
    description: "Glossary description test"
  },
  {
    id:"networking",
    img: 'images/networking.jpg',
    title: 'Networking',
    description: "Networking description test"
  }
]

const Explore = () => {
  return (
    <>
      <StyledExploreList>
        {dummyData.map(({id, title, description, img}) => {
          return <Card linkTo={`/explore/${id}`} title={title} description={description} key={id} imagePath={img}/>
        })}
      </StyledExploreList>
      <FooterNavigation />
    </>
  )
}

export default Explore