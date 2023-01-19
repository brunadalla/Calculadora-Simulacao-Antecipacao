import { useContext } from "react"
import "animate.css"

import { Context } from "../../contexts"
import { ResultP } from "./styles"

interface ResultProps {
  day: string
  value: number
  delay: number
}

const Result = ({ day, value, delay }: ResultProps) => {
  const { defineCurrency } = useContext(Context)

  return (
    <ResultP
      className={`animate__animated animate__fast animate__backInRight animate__delay-${delay}s`}
    >
      {day === "1" ? "Tomorrow: " : `In ${day} days: `}
      <b>{defineCurrency(value)}</b>
    </ResultP>
  )
}

export default Result
