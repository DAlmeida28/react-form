import SignUp from "./components/SignUpForm.jsx"
import Authentication from "./components/Authentication.jsx"
import { useState } from "react"


function App() {
  const [token, setToken] = useState('');

  return (
    <>
      <SignUp setToken={setToken}/>
      <Authentication setToken={setToken} token={token}/>
    </>
  )
}

export default App
