import Link from "next/link"
import { StyledCardHeader, StyledCard, StyledCardBody } from "./styled-components"

export const Card = ({
  title,
  description,
  imagePath,
  linkTo
}: {
  title: string
  description: string
  imagePath: string
  linkTo: string
}) => {
  return (
    <StyledCard>
      <Link href={linkTo}>
        <a>
          <StyledCardHeader>
            <img src={imagePath} alt={title}/>
          </StyledCardHeader>
          <StyledCardBody>
            <h2>{title}</h2>
            <div><p>{description}</p></div>
          </StyledCardBody>
        </a>
      </Link>
    </StyledCard>
  )
}