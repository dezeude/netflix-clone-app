import logo from './logo_long.png'
import background from './background.jpg'

export default function Login() {
  return (
    <>
    <img className='background' src={background} alt='background'/>
    <a href='/'>
      <img src={logo} alt='Netflix Logo' className='logo' style={{width: '200px', height: "110px"}}></img>
    </a>
    <div className='sign-in'>
      <div className='content'>
        <div className='title'>Sign In</div>
        <form onSubmit={submitSignIn}>
          <div className='login-info'>
            <input id='email' className='field' type='text' placeholder='Email'/>
            <input id='password' className='field' type='password' placeholder='Password'/>
          </div>
          <button id='submit-button' className='field' type='submit'>Sign In</button>
          <input id='check' type='checkbox'/>
          <label for='check'>Remember Me?</label>

          <div className='bottom'>
            <label for='signup'>New to Netflix? </label>
            <a href='/signup' id='signup'>Sign Up</a>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

function submitSignIn(e){
  e.preventDefault()
  window.location.href = "http://localhost:3000/browse";
}
