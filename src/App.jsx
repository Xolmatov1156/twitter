import { lazy, Suspense, useContext } from 'react'
import Dashboard from './routes/Dashboard'
import {Context} from './context/Context'
import './App.css'  
const Login = lazy(() => new Promise (resolve => {
  return setTimeout(() => resolve(import("./routes/Login")),1500)
}))


function App() {
  const {token} = useContext(Context)
  return token ? <Dashboard/> : 
  <Suspense fallback='Loading'>
    <Login/>
  </Suspense>
}

export default App


















// const Login = lazy(() => new Promise(resolve => {
//   return setTimeout(() => resolve(import("./routes/Login")), 1500)
// }))