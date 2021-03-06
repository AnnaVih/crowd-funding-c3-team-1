import Link from "next/link";
import { LogoWrapper, PrimaryWord, SecondaryWord } from "./styled-components";

export const Logo = () => (
  <Link href="/">
    <LogoWrapper>
      <PrimaryWord>Crown</PrimaryWord><SecondaryWord>FundHer</SecondaryWord>
    </LogoWrapper> 
 </Link>
)