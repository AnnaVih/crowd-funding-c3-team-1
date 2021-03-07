import { StyledInput, StyledInputWrapper, StyledLabel } from "./styled-components"

export const Input = ({
  type,
  name,
  label,
  placeholder
}: {
  type: string
  name: string
  label: string
  placeholder: string
}) => {
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput placeholder={placeholder} type={type} id={name} name={name}/>
    </StyledInputWrapper>
  )
}