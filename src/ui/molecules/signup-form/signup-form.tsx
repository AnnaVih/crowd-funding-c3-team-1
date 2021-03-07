import { Button } from "../../atoms/button"
import { Input } from "../../atoms/input"
import { InputsWrapper, StyledFrom } from "../login-form/styled-components"


export const SignUpForm = (props) => {
  const signUpHandler = () => {
    
  }
  return (
    <StyledFrom>
      <InputsWrapper>
        <Input type="text" name="name" placeholder="Type your name" label="Name"/>
        <Input type="email" name="email" placeholder="Type your email" label="Email"/>
        <Input type="text" name="companyName" placeholder="Type your company name" label="Company name"/>
      </InputsWrapper>
      <Button linkTo="/explore" type="secondary"  name="Sign Up"/>
    </StyledFrom>
  )
}