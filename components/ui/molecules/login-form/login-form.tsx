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
        <Input type="email" id="email" name="email" label="Email"/>
        <Input type="string" id="password" name="password" label="Password"/>
      </InputsWrapper>
      <Button onClick={signInHandler} type="secondary"  name="Login"/>
    </StyledFrom>
  )
}