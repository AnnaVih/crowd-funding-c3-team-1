import { StyledInput, StyledInputWrapper } from "./styled-components"

export const Input = ({
  id,
  type,
  name,
  label
}: {
  id: string
  type: string
  name: string
  label: string
}) => {
  return (
    <StyledInputWrapper>
      <label htmlFor={id}>{label}</label>
      <StyledInput type={type} id={id} name={name}/>
    </StyledInputWrapper>
  )
}