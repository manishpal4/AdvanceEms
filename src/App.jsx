import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLoalStorage, setLocalStorage } from './utils/LocalStorage'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // setLocalStorage()
    getLoalStorage()
  
  },)
  

  return (
    <>
     <Login />
     {/* <EmployeeDashboard /> */}
     {/* <AdminDashboard/> */}
    </>
  )
}

export default App
