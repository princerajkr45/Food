import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Login() {

  const navigate = useNavigate()
  const [creadantials, setCreadantials] = useState({ email: '', password: '' })
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: creadantials.email,
        password: creadantials.password,
      })
    })
    const json = await response.json()
    console.log(json)

    if (!json.success) {
      alert('Enter valid Credentials')
      localStorage.setItem('userEmail', creadantials.email)
      console.log('Stored Email:', localStorage.getItem('userEmail'));
      localStorage.setItem('authtoken',json.authtoken)
      console.log(localStorage.getItem('authtoken'))
      navigate('/')
    }
  }

  const onChange = (e) => {
    setCreadantials({ ...creadantials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>

          <div class="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={creadantials.email} onChange={onChange} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={creadantials.password} onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/login" className='m-3 btn btn-danger'>I,m new a user</Link>
        </form>
      </div>
    </>
  )
}

export default Login