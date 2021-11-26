import {Navbar} from './style'
import React from 'react';
import {Link} from 'react-router-dom'

function NavBar () {
  return(
  <>
  <Navbar>
    <ul>
      <li><Link exact='true' to='/'>Home</Link></li>
      <li><Link exact='true' to='/presupuestos'>Presupuestos</Link></li>
    </ul>
  </Navbar>
  </>
  )
}

export default NavBar