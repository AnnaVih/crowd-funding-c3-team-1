import { Button } from "../../atoms/button"
import { Input } from "../../atoms/input"
import { InputsWrapper, StyledFrom } from "../login-form/styled-components"
import { useRouter } from 'next/router'


export const SignUpForm = ({
  setIsAuth
}) => {
  const router = useRouter()

  const signUpHandler = (e) => {
    e.preventDefault()
    setIsAuth(true)
    router.push("/explore")
  }
  return (
    <StyledFrom onSubmit={signUpHandler}>
      <InputsWrapper>
        <Input isRequired={true} type="text" name="name" placeholder="Type your name" label="Name"/>
        <Input isRequired={true} type="email" name="email" placeholder="Type your email" label="Email"/>
        <Input isRequired={true} type="text" name="companyName" placeholder="Type your company name" label="Company name"/>
      </InputsWrapper>
      <Button onClick={() => null} type="submit" styleType="secondary"  name="Sign Up"/>
    </StyledFrom>
  )
}