import { Button } from "../../components/ui/atoms/button"
import { Logo } from "../../components/ui/atoms/logo"
import { FooterNavigation } from "../../components/ui/molecules/footer-navigation"
import { Centered, ImageWrapper, SettingsImageWrapper } from "../../styles/styled-components"


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