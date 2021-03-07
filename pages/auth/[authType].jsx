import { useRouter } from 'next/router'
import {LoginForm} from "../../components/ui/molecules/login-form"
import {SignUpForm} from "../../components/ui/molecules/signup-form"
import {Centered, FlexBox} from "../../styles/styled-components"
import {Logo} from "../../components/ui/atoms/logo"


const Authorization = (props) => {
  const router = useRouter()
  const {authType} = router.query

  return (
    <FlexBox>
      <Logo />
      <Centered>
        {
          authType === "login" ? 
          <LoginForm/>
          : <SignUpForm/>
        }
      </Centered>
    </FlexBox>
  )
}

export default Authorization