import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import {  loginUser, registerUser } from '../../redux/userSlice';

const Login = () => {
  const [clicked, setClicked] = useState(true);
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const dispatch = useDispatch()
  const loginHandler = (e)=>{
    e.preventDefault()
    const usr = {email,password}
    dispatch(loginUser(usr))
  }
  const registerHandler = (e)=> {
    e.preventDefault()
    const newUser = {firstName,lastName,email, password}
    dispatch(registerUser(newUser))}
  const switchForm = () => {
    setClicked(!clicked);
  };
 
  return (
    <main>
<div  className={clicked?"Login right-panel-active":"Login"} id="Login">
	<div className="form-container sign-up-container">
		<form action="#" className='cont-input'>
			<h1>Créer un compte</h1>
			<div className="social-container">
				<a href="https://www.facebook.com" className="social link"><i className="fab fa-facebook-f"></i></a>
				<a href="https://www.facebook.com" className="social link"><i className="fab fa-google-plus-g"></i></a>
				<a href="https://www.facebook.com" className="social link"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className='span'>ou utilisez votre email pour vous inscrire</span>
			<input onChange={(e)=>setFirstName(e.target.value)} value={firstName} type="text" placeholder="Prénom" />
			<input onChange={(e)=>setLastName(e.target.value)} value={lastName} type="text" placeholder="Nom" />
			<input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="E-mail" />
			<input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Mot de passe" />
			<button className='btn' onClick={registerHandler} >S'inscrire</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#" className='cont-input'>
			<h1 className='h1'>Se connecter</h1>
			<div className="social-container">
				<a href="https://www.facebook.com"  className="social link"><i className="fab fa-facebook-f"></i></a>
				<a href="https://www.facebook.com" className="social link"><i className="fab fa-google-plus-g"></i></a>
				<a href="https://www.facebook.com" className="social link"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className='span'>ou utilisez votre compte</span>
			<input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="E-mail" />
			<input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Mot de passe" />
			<a className='link'  href="https://www.facebook.com">Mot de passe oublié?</a>
			<button className='btn' onClick={loginHandler} >Se connecter</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Bienvenue</h1>
				<p className='text'>Pour rester en contact avec nous, veuillez vous connecter avec vos informations personnelles</p>
				<button onClick={switchForm} className="ghost btn" id="signIn">Se connecter</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Bonjour</h1>
				<p className='text'>Entrez vos informations personnelles et commencez votre voyage avec nous</p>
				<button onClick={switchForm} className="ghost btn" id="signUp">S'inscrire</button>
			</div>
		</div>
	</div>
</div>
    </main>
  )
}

export default Login
