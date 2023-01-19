import ReactLoading from "react-loading"
import "./styles.css"

const Loading = () => (
  <ReactLoading
    type='spinningBubbles'
    color={"var(--blue-100)"}
    height={"100%"}
    width={"100%"}
    className='div-loading'
  />
)

export default Loading
