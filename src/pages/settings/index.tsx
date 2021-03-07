import { Button } from "../../ui/atoms/button"
import { Logo } from "../../ui/atoms/logo"
import { FooterNavigation } from "../../ui/molecules/footer-navigation"
import { Centered } from "../../styles/styled-components"


const Settings = ({
  isAuth
}: {
  isAuth: boolean
}) => (
  <>
    <Logo />
    {isAuth ?  <Centered>
      <h1 style={{textAlign: "center"}}>Your settings</h1>
      <div style={{textAlign: "center"}}><img  src="/images/inv1.jpg"/></div>
    </Centered> :
    <Centered>
        <Button  styleType="primary" linkTo="/auth/login" name="Login"/>
        <Button  styleType="primary" linkTo="/auth/signup" name="Register"/>
    </Centered>
    }
    <FooterNavigation />
  </>
)

export default Settings