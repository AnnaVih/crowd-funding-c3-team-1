import { FooterNavigation } from "../../components/ui/molecules/footer-navigation"
import { MapImageWrapper } from "../../styles/styled-components"

const Map = () => (
  <>
    <MapImageWrapper>
      <img src="/images/map.png" alt="map"/>
    </MapImageWrapper>
    <FooterNavigation />
  </>
)

export default Map