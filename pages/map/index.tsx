import { FooterNavigation } from "../../components/ui/molecules/footer-navigation"
import { ImageWrapper, MapImage } from "../../styles/styled-components"

const Map = () => (
  <>
    <ImageWrapper>
      <MapImage src="/images/map.png" alt="map"/>
    </ImageWrapper>
    <FooterNavigation />
  </>
)

export default Map