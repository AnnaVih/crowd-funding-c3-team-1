import { Button } from "../../atoms/button"
import { Input } from "../../atoms/input"
import { InputsWrapper, StyledFrom } from "./styled-components"

export const LoginForm = (props) => {
  const signInHandler = () => {
    console.log('signedIn')
  }
  return (
    <StyledFrom>
      <InputsWrapper>
        <Input type="email" placeholder="Type your email" name="email" label="Email"/>
        <Input type="password" placeholder="Type your password" name="password" label="Password"/>
      </InputsWrapper>
      <Button linkTo="/explore" type="secondary"  name="Login"/>
    </StyledFrom>
  )
}