import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home"

const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  )
}

export default RoutesMain