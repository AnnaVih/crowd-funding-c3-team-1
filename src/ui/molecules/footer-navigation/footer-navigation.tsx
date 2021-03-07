import Link from "next/link"
import { useRouter } from "next/router"
import { StyledLi, StyledNav } from "./styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking } from '@fortawesome/free-solid-svg-icons'
import { faDonate } from '@fortawesome/free-solid-svg-icons'
import { faMapMarked } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'




export const FooterNavigation = () => {
  const router = useRouter()
  return <StyledNav>
    <StyledLi className={router.pathname == "/explore" ? "active" : ""}>
      <Link href="/explore">
        <a>
          <div><FontAwesomeIcon icon={faBiking} /></div>
          <span>Explore</span>
        </a>
      </Link>
    </StyledLi>
    <StyledLi className={router.pathname == "/map" ? "active" : ""}>
      <Link href="/map">
        <a>
          <div><FontAwesomeIcon icon={faMapMarked} /></div>
          <span>Map</span>
        </a>
      </Link>
    </StyledLi>
    <StyledLi className={router.pathname == "/top-investors" ? "active" : ""}>
      <Link href="/top-investors">
        <a>
          <div><FontAwesomeIcon icon={faDonate} /></div>
          <span>Top Investors</span>
        </a>
      </Link>
    </StyledLi>
    <StyledLi className={router.pathname == "/settings" ? "active" : ""}>
      <Link href="/settings">
        <a>
          <div><FontAwesomeIcon icon={faCog} /></div>
          <span>Settings</span>
        </a>
      </Link>
    </StyledLi>
  </StyledNav>
}