import React from 'react'
import { Button } from '../ui/atoms/button'
import { Logo } from '../ui/atoms/logo'
import { Centered, FlexBox } from '../styles/styled-components'

const Home =({
  isAuth
}: {
  isAuth: boolean
}) => {
  return (
    <FlexBox>
      <Logo />
      <Centered>
        {!isAuth && <>
          <Button  styleType="primary" rounded="all" linkTo="/auth/login" name="Login"/>
          <Button  styleType="primary" rounded="all" linkTo="/auth/signup" name="Register"/>
        </>}
        <Button  styleType="secondary" rounded="all" linkTo="/explore" name="Explore"/>
      </Centered>
    </FlexBox>
  )
}

export default Home