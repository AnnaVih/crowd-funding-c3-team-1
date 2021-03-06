import Link from "next/link"
import { useRouter } from "next/router"
import { StyledLi, StyledNav } from "./styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking } from '@fortawesome/free-solid-svg-icons'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faMapMarked } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'




export const FooterNavigation = () => {
  const router = useRouter()
  return <StyledNav>
    <StyledLi className={router.pathname == "/explore" ? "active" : ""}>
      <Link href="/explore">
        <div>
          <div><FontAwesomeIcon icon={faBiking} /></div>
          <span>Explore</span>
        </div>
      </Link>
    </StyledLi>
    <StyledLi className={router.pathname == "/projects" ? "active" : ""}>
      <Link href="/projects">
        <div>
          <div><FontAwesomeIcon icon={faProjectDiagram} /></div>
          <span>Projects</span>
        </div>
      </Link>
    </StyledLi>
    <StyledLi className={router.pathname == "/map" ? "active" : ""}>
      <Link href="/map">
        <div>
          <div><FontAwesomeIcon icon={faMapMarked} /></div>
          <span>Map</span>
        </div>
      </Link>
    </StyledLi>
    <StyledLi className={router.pathname == "/settings" ? "active" : ""}>
      <Link href="/settings">
        <div>
          <div><FontAwesomeIcon icon={faCog} /></div>
          <span>Settings</span>
        </div>
      </Link>
    </StyledLi>
  </StyledNav>
}