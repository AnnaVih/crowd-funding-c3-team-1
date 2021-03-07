import Link from "next/link";
import { LogoWrapper, PrimaryWord, SecondaryWord } from "./styled-components";

export const Logo = () => (
  <Link href="/">
    <LogoWrapper>
      <img src="/images/logo.png" alt="crowd fund her logo"/>
    </LogoWrapper> 
 </Link>
)