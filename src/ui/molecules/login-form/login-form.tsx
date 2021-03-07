import { useRouter } from 'next/router'
import { Button } from "../../atoms/button"
import { Input } from "../../atoms/input"
import { InputsWrapper, StyledFrom } from "./styled-components"

export const LoginForm = ({isAuth, setIsAuth}) => {
  const router = useRouter()

  const signInHandler = (e) => {
    e.preventDefault()
    setIsAuth(true)
    router.push("/explore")
  }
  return (
    <StyledFrom onSubmit={signInHandler}>
      <InputsWrapper>
        <Input isRequired={true} type="email" placeholder="Type your email" name="email" label="Email"/>
        <Input isRequired={true} type="password" placeholder="Type your password" name="password" label="Password"/>
      </InputsWrapper>
      <Button type="submit" onClick={() => null} styleType="secondary"  name="Login"/>
    </StyledFrom>
  )
}