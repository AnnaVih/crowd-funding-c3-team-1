import Link from "next/link"
import { StyledCardHeader } from "./styled-components"

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
    <Link href={linkTo}>
      <a>
        <StyledCardHeader>
          <img src={imagePath} alt={title}/>
        </StyledCardHeader>
        <div>
          <h1>{title}</h1>
          <div><p>{description}</p></div>
        </div>
      </a>
    </Link>
  )
}