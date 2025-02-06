import { useState } from "react"

const Authentication = ({ token }) => {
const [successMessage, setSuccessmessage] = useState('');
const [error, setError] = useState('');

  const handleClick = async () => {
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',{
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      })
      const result = await response.json();
      setSuccessmessage(result.message);
    } catch (err) {
      setError(err.message);
    }

    
  }

  return ( 
    <>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button
        onClick={handleClick}
      >Authenticate Token</button>
    </>
  )
}

export default Authentication