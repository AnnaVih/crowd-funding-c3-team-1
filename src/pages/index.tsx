import React from 'react'
import { Button } from '../ui/atoms/button'
import { Logo } from '../ui/atoms/logo'
import { Centered, FlexBox } from '../styles/styled-components'

const Home =() => {
  return (
    <FlexBox>
      <Logo />
      <Centered>
        <Button  type="primary" linkTo="/auth/login" name="Login"/>
        <Button  type="primary" linkTo="/auth/signup" name="Register"/>
        <Button  type="secondary" linkTo="/explore" name="Explore"/>
      </Centered>
    </FlexBox>
  )
}

export default Home