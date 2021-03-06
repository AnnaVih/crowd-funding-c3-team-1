import React from 'react'
import { Card } from '../../components/ui/molecules/card'
import { StyledExplore } from './styled-components'
import { dummyData } from "../../dummyData"

const Explore = () => {
  return (
    <StyledExplore>
      {dummyData.map(({id, title, description, img}) => {
        return <Card linkTo={`/explore/${id}`} title={title} description={description} key={id} imagePath={img}/>
      })}
    </StyledExplore>
  )
}

export default Explore