import { useContext, useEffect, useState } from "react"

import { Context } from "../../contexts"
import { HomeContainer } from "./styles"
import Form from "../../components/Form"
import Result from "../../components/Result"

const Home = () => {
  const { response } = useContext(Context)
  const [data, setdata] = useState(response)

  useEffect(() => {
    setdata(response)
  }, [response])

  return (
    <HomeContainer>
      <main>
        <section id='section-form'>
          <h1>Simule sua Antecipação</h1>
          <Form />
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
