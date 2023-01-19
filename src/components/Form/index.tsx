import { useContext } from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import "animate.css"

import { Context } from "../../contexts"
import { InputContainer as Input, FormContainer } from "./styles"

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
          placeholder='Ex: 1000'
          type='number'
          error={errors.amount ? true : false}
          {...register("amount")}
        />
        {errors?.amount && (
          <p className='animate__animated animate__shakeX'>
            {errors.amount.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor='installments'>Em quantas parcelas</label>
        <Input
          id='installments'
          placeholder='Ex: 6'
          error={errors.installments ? true : false}
          {...register("installments")}
        />
        {errors?.installments ? (
          <p className='animate__animated animate__shakeX'>
            {errors.installments.message}
          </p>
        ) : (
          <small> Máximo de 12 parcelas </small>
        )}
      </div>

      <div>
        <label htmlFor=''>Informe o percentual de MDR</label>
        <Input
          id='mdr'
          placeholder='Ex: 4'
          error={errors.mdr ? true : false}
          {...register("mdr")}
        />
        {errors?.mdr && (
          <p className='animate__animated animate__shakeX'>
            {errors.mdr.message}
          </p>
        )}
      </div>

      <button type='submit'>Calculate</button>
    </FormContainer>
  )
}

export default Form
