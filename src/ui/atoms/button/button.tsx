import Link from 'next/link'
import { StyledButton } from './styled-components'
import { ButtonType } from './types'

export const Button = ({
  name,
  linkTo,
  styleType,
  rounded = "none",
  className,
  size,
  onClick,
  type
}: {
  name: string
  onClick?: () => void
  linkTo?: string
  styleType: ButtonType
  rounded?: "left" | "right" | "none" | "all"
  className?: string
  size?: string
  type?:  "button" | "submit" | "reset"
}) => ( 
  <StyledButton size={size} styleType={styleType} rounded={rounded} className={className} name={name}>{
    linkTo ? <Link href={linkTo}>{name}</Link>
    : <button type={type} onClick={onClick}>{name}</button> }
  </StyledButton>
 )
