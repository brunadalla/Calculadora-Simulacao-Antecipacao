import { ResultP } from "./styles"

interface ResultProps {
  day: string
  value: number
}

const Result = ({ day, value }: ResultProps) => {
  return (
    <ResultP>
      {day === '1' ? "Amanhã:" : `Em ${day} dias:`}
      <b>R$ {value}</b>
    </ResultP>
  )
}

export default Result
