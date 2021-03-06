import React from 'react'
import { Card } from '../../components/ui/molecules/card'

import { dummyData } from "../../dummyData"

const Explore = () => {
  return (
    <div>
      {dummyData.map(({id, title, description, img}) => {
        return <Card linkTo={`/explore/${id}`} title={title} description={description} key={id} imagePath={img}/>
      })}
    </div>
  )
}

export default Explore