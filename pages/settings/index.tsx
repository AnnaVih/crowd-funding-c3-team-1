import { FooterNavigation } from "../../components/ui/molecules/footer-navigation"
import { ImageWrapper, SettingsImageWrapper } from "../../styles/styled-components"


const Settings = () => (
  <>
    <ImageWrapper>
      <SettingsImageWrapper src="/images/in-development.png"/>
      <p>UNDER DEVELOPMENT</p>
    </ImageWrapper>
    <FooterNavigation />
  </>
)

export default Settings