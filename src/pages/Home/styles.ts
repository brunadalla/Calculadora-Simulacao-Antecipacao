import styled from "styled-components"

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  main {
    width: 100%;
    height: 100%;
    min-width: 320px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    @media (min-width: 768px) {
      width: 90%;
      max-width: 800px;

      height: 90%;
      min-height: 520px;
      max-height: 500px;

      margin: 25px;
      border: 2px solid var(--gray-200);
      border-radius: 8px;

      flex-direction: row;
    }

    section {
      width: 100%;
      padding: 25px;

      @media (min-width: 768px) {
        padding: 50px;
      }
    }

    #section-form {
      height: 68%;
      min-height: 450px;

      display: flex;
      align-items: center;
      justify-content: center;

      @media (min-width: 768px) {
        width: 60%;
        height: 100%;
      }

      #div-form {
        height: 100%;
        max-height: 560px;

        width: 100%;
        max-width: 555px;

        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;

        @media (min-width: 768px) {
          max-width: 360px;
        }

        h1 {
          padding-bottom: 5px;

          color: var(--gray-600);
          font-size: 1.7rem;
          font-weight: 700;
        }
      }
    }

    #section-results {
      height: 32%;
      min-height: 160px;

      padding-top: 25px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: var(--gray-100);

      @media (min-width: 768px) {
        width: 40%;
        height: 100%;

        border-radius: 0px 8px 8px 0;
      }

      #div-results {
        width: 100%;
        max-width: 555px;

        height: 100%;
        max-height: 325px;

        gap: 10%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: flex-start;

        @media (min-width: 768px) {
          max-width: 200px;
        }

        h3 {
          width: 100%;
          height: 30px;

          border-bottom: 1px solid var(--blue-300);

          color: var(--blue-300);
          font-size: 1.2rem;
          font-weight: 600;
        }

        div {
          width: 100%;
          height: 70%;

          display: flex;
          align-items: flex-start;
          flex-direction: column;
          justify-content: space-between;
        }
      }
    }
  }
`
