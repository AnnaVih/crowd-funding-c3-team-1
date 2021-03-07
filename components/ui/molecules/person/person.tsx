import { StyledPerson, StyledImg, StyledName } from './styled-components'

export const Person = ({
  imgPath,
  name,
  description
}: {
  imgPath: string
  name: string
  description: string
}) => 
  <StyledPerson>
    <StyledImg src={imgPath} alt="investor"/>
    <StyledName>
      <h2>{name}</h2>
      <p>{description}</p>
    </StyledName>
  </StyledPerson>