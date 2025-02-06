import { useState } from "react"

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, {
        method: `POST`,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      });

      const result = await response.json();
      console.log(result);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h2>Sign up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          onChange={(event) => { setUsername(event.target.value) }}
        />
        <input
          placeholder="password"
          onChange={(event) => { setPassword(event.target.value) }}
        />

        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUp