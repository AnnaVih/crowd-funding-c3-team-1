import Link from 'next/link'
import { StyledButton } from './styled-components'
import { ButtonType } from './types'

export const Button = ({
  name,
  onClick,
  linkTo,
  type,
  isRounded = true,
  className,
  size
}: {
  name: string
  onClick?: () => void
  linkTo?: string
  type?: ButtonType
  isRounded?: boolean
  className?: string
  size?: string
}) => ( 
  <StyledButton size={size} type={type} isRounded={isRounded} className={className}>{
    linkTo ? <Link href={linkTo}>{name}</Link>
    : <button onClick={onClick}>{name}</button> }
  </StyledButton>
 )
