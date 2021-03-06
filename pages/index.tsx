import React from 'react'
import { Button } from '../components/ui/atoms/button'
import { ActionButtons } from './styled-components'

const Home =() => {
  return (
    <ActionButtons>
      <Button  type="primary" linkTo="/auth/login" name="Login"/>
      <Button  type="secondary" linkTo="/auth/signup" name="Get Started"/>
    </ActionButtons>
  )
}

export default Home