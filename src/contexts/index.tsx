import { createContext, ReactNode, useState } from "react"
import { toast } from "react-hot-toast"
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
  isLoading: boolean
  defaultDays: Array<number>
  defineCurrency: (total: number) => string
}

type IResponseProps = {
  day: string
  value: any
}

export const Context = createContext<IContext>({} as IContext)

export const Provider = ({ children }: IProviderProps) => {
  const defaultDays = [1, 15, 30, 90]

  const [response, setResponse] = useState<IResponseProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function defineCurrency(total: number) {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(total)
  }

  function calculate(data: ICalculateProps) {
    setIsLoading(true)

    setTimeout(() => {
      instance({ method: "POST", data: { ...data, days: defaultDays } })
        .then((res) => {
          const array = Object.keys(res.data).map((key, index) => {
            return { day: key, value: Object.values(res.data)[index] }
          })
          setResponse(array)
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
          toast.error(
            "Something went wrong! Please try again.",
            { duration: 6000 }
          )
        })
    }, 1000)
  }

  return (
    <Context.Provider
      value={{ calculate, response, isLoading, defaultDays, defineCurrency }}
    >
      {children}
    </Context.Provider>
  )
}
