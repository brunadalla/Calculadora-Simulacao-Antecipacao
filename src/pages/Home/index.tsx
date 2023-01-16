import Input from "../../components/Input"
import { HomeContainer } from "./styles"

import { Context } from "../../contexts"
import { useContext, useEffect, useState } from "react"
import Result from "../../components/Result"

const Home = () => {
  const { calculate, response } = useContext(Context)
  const [data, setdata] = useState(response)

  useEffect(() => {
    setdata(response)
  }, [response])

  return (
    <HomeContainer>
      <main>
        <section id='section-form'>
          <h1>Simule sua Antecipação</h1>

          <form>
            <Input
              name='valor'
              label='Informe o valor da venda'
              placeholder='Ex: $1000'
              type='text'
              dataType='currency'
            />
            <Input
              name='parcelas'
              label='Em quantas parcelas'
              placeholder='Ex: 6'
              text='Máximo de 12 parcelas'
            />
            <Input
              name='mdr'
              label='Informe o percentual de MDR'
              placeholder='Ex: 4'
            />
            <button></button>
          </form>
        </section>

        <section id='section-results'>
          <h3>VOCÊ RECEBERÁ:</h3>
          <div>
            {data.map((obj, index) => (
              <Result day={obj.day} value={obj.value} key={index} />
            ))}
          </div>
        </section>
      </main>
    </HomeContainer>
  )
}

export default Home
