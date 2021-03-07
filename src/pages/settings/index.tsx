import { Button } from "../../ui/atoms/button"
import { Logo } from "../../ui/atoms/logo"
import { FooterNavigation } from "../../ui/molecules/footer-navigation"
import { Centered } from "../../styles/styled-components"


const Settings = () => (
  <>
    <Logo />
    <Centered>
        <Button  type="primary" linkTo="/auth/login" name="Login"/>
        <Button  type="primary" linkTo="/auth/signup" name="Register"/>
      </Centered>
    <FooterNavigation />
  </>
)

export default Settings