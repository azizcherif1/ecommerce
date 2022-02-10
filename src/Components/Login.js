import React, { useState } from 'react';
import '../Login.css'
import {Link} from 'react-router-dom';


function Login() {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const signIn = e=> {
    e.preventDegault();

    

  }
  return (
    
  <div className='login'>
      <Link to='/'>
<img className='login_logo' src="https://serving.photos.photobox.com/47240196c8c2e8554c4e25625a72a64318ef42a2a35b065ea723a9fdedd479f2cb489454.jpg" alt=""/>
</Link>

<div className='login_container'>

<h1>Sign-in</h1>
<form>
<h5>E-mail</h5>
<input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

<h5>Password</h5>
<input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

<button type='submit' onClick={signIn} className='button_sign'>Sign in</button>
</form>

<button className='login_register'>Create your KeySHOP Account</button>




</div>
  </div>
  
  
  );
}

export default Login;
