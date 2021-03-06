import { useRouter } from 'next/router'

import {LoginForm} from "../../components/ui/molecules/login-form"
import {SignUpForm} from "../../components/ui/molecules/signup-form"


const Authorization = (props) => {
  const router = useRouter()
  const {authType} = router.query

  const signInHandler = () => {
    console.log('signedIn')
  }

  const signUpHandler = () => {
    console.log('signedIn')
  }
  return (
  <>
    {
      authType === "login" ? 
      <LoginForm>

      </LoginForm> 
      : <SignUpForm>

      </SignUpForm>
    }
  </>
  )
}

export default Authorization