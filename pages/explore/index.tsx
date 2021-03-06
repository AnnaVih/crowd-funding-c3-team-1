import React from 'react'
import { Card } from '../../components/ui/molecules/card'
import { StyledExploreList } from './styled-components'
import { dummyData } from "../../dummyData"
import { FooterNavigation } from '../../components/ui/molecules/footer-navigation'

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