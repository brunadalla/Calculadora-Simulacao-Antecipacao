import { InputContainer as Input, FormContainer } from "./styles"

import { Context } from "../../contexts"
import { useContext } from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

interface IFormProps {
  amount: number
  installments: number
  mdr: number
}

const Form = () => {
  const { calculate } = useContext(Context)

  const formSchema = yup.object().shape({
    amount: yup
      .number()
      .typeError("A number is required")
      .positive()
      .min(1000, "The amount value must be equal or greater than 1000"),
    installments: yup
      .number()
      .typeError("A number is required")
      .positive()
      .min(1, "The installments value must be equal or greater than 1"),
    mdr: yup
      .number()
      .typeError("A number is required")
      .positive()
      .min(1, "The mdr value must be equal or greater than 1"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>({
    resolver: yupResolver(formSchema),
  })

  return (
    <FormContainer onSubmit={handleSubmit(calculate)}>
      <div>
        <label htmlFor='amount'>Informe o valor da venda</label>
        <Input
          id='amount'
          placeholder='Ex: R$1000'
          type='number'
          error={errors.amount ? true : false}
          {...register("amount")}
        />
        {errors?.amount ? <p>{errors.amount.message}</p> : <p></p>}
      </div>

      <div>
        <label htmlFor='installments'>Em quantas parcelas</label>
        <Input
          id='installments'
          placeholder='Ex: 6'
          error={errors.installments ? true : false}
          {...register("installments")}
        />
        <small>Máximo de 12 parcelas</small>
        {errors?.installments ? <p>{errors.installments.message}</p> : <p></p>}
      </div>

      <div>
        <label htmlFor=''>Informe o percentual de MDR</label>
        <Input
          id='mdr'
          placeholder='Ex: 4'
          error={errors.mdr ? true : false}
          {...register("mdr")}
        />
        {errors?.mdr ? <p>{errors.mdr.message}</p> : <p></p>}
      </div>

      <button type='submit'>Calculate</button>
    </FormContainer>
  )
}

export default Form
