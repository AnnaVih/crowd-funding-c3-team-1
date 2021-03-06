import { useRouter } from 'next/router'
import {LoginForm} from "../../components/ui/molecules/login-form"
import {SignUpForm} from "../../components/ui/molecules/signup-form"
import {Centered} from '../../styles/styled-components'

const Authorization = (props) => {
  const router = useRouter()
  const {authType} = router.query

  return (
  <Centered>
    {
      authType === "login" ? 
      <LoginForm/>
      : <SignUpForm/>
    }
  </Centered>
  )
}

export default Authorization