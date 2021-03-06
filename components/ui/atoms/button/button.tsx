import Link from 'next/link'
import { StyledButton } from './styled-components'
import { ButtonType } from './types'

export const Button = ({
  name,
  onClick,
  linkTo,
  type
}: {
  name: string
  onClick?: () => void
  linkTo?: string
  type?: ButtonType
}) => ( 
  <StyledButton type={type}>{
    linkTo ? <Link href={linkTo}>{name}</Link>
    : <button onClick={onClick}>{name}</button> }
  </StyledButton>
 )
