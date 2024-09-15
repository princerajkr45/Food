import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate =useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authtoken')
        navigate('/login')
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1" >GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active fs-5" aria-current="page" >Home</Link>
                            </li>

                            {(localStorage.getItem("authtoken"))?
                            <li>
                                <Link to='/' className='nav-link active fs-5' aria-current='page'>My Orders</Link>
                            </li>  : ""}

                        </ul>

                        {!(localStorage.getItem("authtoken")) ?
                        <div className="d-flex">
                           
                            <Link to='/login' className="btn bg-white rounded mx-1 text-success">Login</Link>
                            <Link to='/signup' className="btn bg-white rounded mx-1 text-success">SignUp</Link>

                        </div>
                        : 
                          <div>

                                <div className='btn bg-white rounded mx-1 text-success'>My Cart </div>
                                <div className='btn bg-white rounded mx-1 text-danger' onClick={handleLogout}>Logout </div>

                          </div>
 

                        }

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar