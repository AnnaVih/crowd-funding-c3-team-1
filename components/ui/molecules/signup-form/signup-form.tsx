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
        <Input type="text" id="name" name="name" label="Name"/>
      </InputsWrapper>
      <Button onClick={signUpHandler} type="secondary"  name="Sign Up"/>
    </StyledFrom>
  )
}