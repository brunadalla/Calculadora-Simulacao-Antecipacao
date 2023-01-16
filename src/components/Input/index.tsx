import { InputContainer } from "./styles"

interface InputProps {
  name: string
  label: string
  placeholder: string
  text?: string
  type?: string
  dataType?: string
}

const Input = ({ name, label, placeholder, text, type='number', dataType=''}: InputProps) => {
  return (
    <InputContainer>
      <label htmlFor={name}>{label} *</label>
      <input type={type} name={name} placeholder={placeholder} data-type={dataType}/>
      {!!text && <small>{text}</small>}
    </InputContainer>
  )
}

export default Input
