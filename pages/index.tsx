import React from 'react'
import { Button } from '../components/ui/atoms/button'
import { Centered } from './styled-components'

const Home =() => {
  return (
    <Centered>
      <Button  type="primary" linkTo="/auth/login" name="Login"/>
      <Button  type="primary" linkTo="/auth/signup" name="Register"/>
      <Button  type="secondary" linkTo="/explore" name="Explore"/>
    </Centered>
  )
}

export default Home