import { Button } from "../../atoms/button"
import { Input } from "../../atoms/input"
import { InputsWrapper, StyledFrom } from "../login-form/styled-components"


export const SignUpForm = (props) => {
  const signUpHandler = () => {
    console.log('signedUp')
  }
  return (
    <StyledFrom>
      <InputsWrapper>
        <Input type="text" name="name" placeholder="Type your name" label="Name"/>
        <Input type="email" name="email" placeholder="Type your email" label="Email"/>
        <Input type="text" name="companyName" placeholder="Type your company name" label="Company name"/>
        <Input type="text" name="companyUrl" placeholder="Type your company url" label="Company url"/>
        <Input type="text" name="industry" placeholder="Type your industry" label="Industry"/>
      </InputsWrapper>
      <Button onClick={signUpHandler} type="secondary"  name="Sign Up"/>
    </StyledFrom>
  )
}