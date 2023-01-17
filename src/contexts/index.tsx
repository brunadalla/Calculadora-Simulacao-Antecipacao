import { createContext, ReactNode, useEffect, useState } from "react"
import instance from "../services/api"

interface IProviderProps {
  children: ReactNode
}

interface ICalculateProps {
  amount: number
  installments: number
  mdr: number
  days?: Array<number>
}

interface IContext {
  calculate: (data: ICalculateProps) => void
  response: IResponseProps[]
}

type IResponseProps = {
  day: string
  value: any
}

const defaultDays = [1, 15, 30, 90]
const defaultDB = {
  amount: 1000,
  installments: 1,
  mdr: 1,
  days: defaultDays,
}

export const Context = createContext<IContext>({} as IContext)

export const Provider = ({ children }: IProviderProps) => {
  const [response, setResponse] = useState<IResponseProps[]>([])

  useEffect(() => {
    instance({ method: "POST", data: defaultDB })
      .then((res) => {
        const array = Object.keys(res.data).map((key, index) => {
          return { day: key, value: 0 }
        })
        setResponse(array)
      })
      .catch((err) => console.log(err.response.data))
  }, [])

  function calculate(data: ICalculateProps) {
    instance({ method: "POST", data: { ...data, days: defaultDays } })
      .then((res) => {
        const array = Object.keys(res.data).map((key, index) => {
          return { day: key, value: Object.values(res.data)[index]}
        })
        setResponse(array)
      })
      .catch((err) => console.log(err.response))
  }

  return (
    <Context.Provider value={{ calculate, response }}>
      {children}
    </Context.Provider>
  )
}
