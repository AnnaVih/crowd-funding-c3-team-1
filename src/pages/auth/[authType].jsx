import { useRouter } from 'next/router'
import {LoginForm} from "../../ui/molecules/login-form"
import {SignUpForm} from "../../ui/molecules/signup-form"
import {Centered, FlexBox} from "../../styles/styled-components"
import {Logo} from "../../ui/atoms/logo"


const Authorization = (props) => {
  const router = useRouter()
  const {authType} = router.query

  return (
    <FlexBox>
      <Logo />
      <Centered>
        {
          authType === "login" ? 
          <LoginForm {...props}/>
          : <SignUpForm {...props}/>
        }
      </Centered>
    </FlexBox>
  )
}

export default Authorization