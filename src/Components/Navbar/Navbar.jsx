import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() 
{

  return (
    <div>

<nav className="navbar navbar-expand-lg d-flex justify-content-center align-items-center my-2 navbar-dark bg-transparent">
  <div className="container-fluid">
    <Link  href="" blank className="my-2 navbar-brand fw-bolder">NOXE</Link>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    
    <div className="collapse navbar-collapse  my-2" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  my-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link"to="Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to="Movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to="Tvshow">Tv Show</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"to="People">People</Link>
        </li>

    

        <li>
            

        </li>
    
    
     
        

      
      </ul>


      


     

     
      <ul className="navbar-nav mb-2 mb-lg-0">

        <li className="nav-item d-flex align-items-center me-5">
            <Link href="https://www.instagram.com"  target='blank'><i className='fab mx-2 m-3 fa-instagram'></i></Link>
          <Link href="https://www.facebook.com" target='blank'> <i className='fab mx-2 m-3 fa-facebook'></i></Link> 
           <Link href="https://www.youtube.com"  target='blank'> <i className='fab mx-2 m-3 fa-youtube'></i></Link>

           
        </li>

        
      

          

      </ul>
    </div>
  </div>
  
</nav>

    </div>
  )
}
