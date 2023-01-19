import { useContext } from "react"
import "animate.css"

import { Context } from "../../contexts"
import { HomeContainer } from "./styles"
import Form from "../../components/Form"
import Result from "../../components/Result"
import Loading from "../../components/Loading"
import { Toaster } from "react-hot-toast"

const Home = () => {
  const { response, isLoading, defaultDays, defineCurrency } =
    useContext(Context)

  return (
    <HomeContainer className='animate__animated animate__fadeIn'>
      <div><Toaster/></div>
      <main>
        <section id='section-form'>
          <div id='div-form'>
            <h1> Simulate your Antecipation </h1>
            <Form />
          </div>
        </section>

        <section id='section-results'>
          <div id='div-results'>
            <h3> YOU WILL RECEIVE: </h3>
            <div>
              {isLoading ? (
                <Loading />
              ) : response.length > 0 ? (
                response.map((obj, index) => (
                  <Result
                    day={obj.day}
                    value={obj.value}
                    key={index}
                    delay={index}
                  />
                ))
              ) : (
                defaultDays.map((days) => (
                  <p className='default-values'>
                    {days === 1 ? "Tomorrow: " : `In ${days} days: `}
                    <b>{defineCurrency(0)}</b>
                  </p>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </HomeContainer>
  )
}

export default Home
