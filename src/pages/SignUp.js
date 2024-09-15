import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {

    const [creadantials, setCreadantials] = useState({name:'',email:'',password:'',location:''})
    const handleSubmit = async(e) => {
       e.preventDefault()
        const response = await fetch("http://localhost:5000/api/createuser",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: creadantials.name,
              email: creadantials.email,
              password: creadantials.password,
              location: creadantials.location,
            })
        })
        const json = await response.json()
        console.log(json)

        if(!json.success) {
            alert('Enter valid Credentials')
        }
    }

    const onChange = (e) => {
        setCreadantials({...creadantials, [e.target.name]: e.target.value })
    }


  return (
    <>
    <div className='container'>
              <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" name='name' value={creadantials.name} onChange={onChange}/>
                  </div>
                  <div class="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input type="email" className="form-control" name='email' value={creadantials.email} onChange={onChange} />
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" name='password' value={creadantials.password} onChange={onChange} />
                  </div>

                  <div className="mb-3">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input type="address" className="form-control" name='location' value={creadantials.address} onChange={onChange} />
                  </div>

                  <button type="submit" className="btn btn-primary">Submit</button>
                  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
              </form>
    </div>
         
    </>
  )
}

export default SignUp