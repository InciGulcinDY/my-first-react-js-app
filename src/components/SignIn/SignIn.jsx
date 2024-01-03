import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'

function SignIn(props) {

    const {cartItems} = useSelector(state => state.cart)

  return (
    <div className='container-fluid d-flex'>

        {/*Language Dropdown Menu*/}
        <Link className="navbar-brand btn dropdown-toggle" to="/">
            Language
        </Link>

        {/*TODO: Dropdown will be added!!!*/}

        <Link className="navbar-brand btn d-flex" to="/" onClick={props.signOut} >
            <img src="/assets/profil.jpg" className="rounded mx-auto d-block me-1" width={30} alt=""/>
            Inci
        </Link>

        {cartItems.length>0&&<Cart/>}
        
    </div>
  )
}

export default SignIn