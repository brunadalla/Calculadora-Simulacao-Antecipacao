import { useContext, useEffect, useState } from "react"
import 'animate.css';

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
    <HomeContainer className="animate__animated animate__fadeIn">
      <main>
        <section id='section-form'>
          <div id='div-form'>
            <h1>Simule sua Antecipação</h1>
            <Form />
          </div>
        </section>
        <section id='section-results'>
          <div id='div-results'>
            <h3>VOCÊ RECEBERÁ:</h3>
            <div>
              {data?.map((obj, index) => (
                <Result day={obj.day} value={obj.value} key={index}/>
              ))}
            </div>
          </div>
        </section>
      </main>
    </HomeContainer>
  )
}

export default Home
