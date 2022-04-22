import React, { useState } from 'react';
import '../Login.css'
import {Link} from 'react-router-dom';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Message } from '@mui/icons-material';


function Login() {
  const history = useHistory();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const signIn = e=> {
    e.preventDefault();
  auth.signInWithEmailAndPassword(email,password)
  .then (auth => {
    history.push('/')

  })
  .catch(error => alert(error,Message))
  }



    const signup = e=> {
      e.preventDefault();

      auth.createUserWithEmailAndPassword(email,password)
      .then((auth)    => {
      // t3adet
    
      console.log(auth);
      if (auth)
      {
        history.push('/')
      }
    })
    
    .catch(error=> alert(error,Message))
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

<button onClick={signup} className='login_register'>Create your KeySHOP Account</button>




</div>
  </div>
  
  
  );
}

export default Login;
