import styled from "styled-components"

interface IInputProps {
  error: boolean
}

export const InputContainer = styled.input<IInputProps>`
  border: ${({ error }) => (error ? "2px red solid" : "2px green solid")};
`

export const FormContainer = styled.form`
  ${InputContainer}
`

