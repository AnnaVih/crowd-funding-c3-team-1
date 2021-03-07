import { StyledInput, StyledInputWrapper, StyledLabel } from "./styled-components"

export const Input = ({
  type,
  name,
  label,
  placeholder,
  isRequired
}: {
  type: string
  name: string
  label: string
  placeholder: string
  isRequired?: boolean
}) => {
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput required={isRequired} placeholder={placeholder} type={type} id={name} name={name}/>
    </StyledInputWrapper>
  )
}