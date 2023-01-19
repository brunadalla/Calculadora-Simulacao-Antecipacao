import { ResultP } from "./styles"
import 'animate.css';

interface ResultProps {
  day: string
  value: number
}

const Result = ({ day, value }: ResultProps) => {

  function defineCurrency(total: number) {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(total)
  }
  return (
    <ResultP>
      {day === '1' ? "Amanhã: " : `Em ${day} dias: `}
      <b>{defineCurrency(value)}</b>
    </ResultP>
  )
}

export default Result
