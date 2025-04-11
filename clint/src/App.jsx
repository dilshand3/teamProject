import { useState } from 'react'
import './App.css'
import { BiSolidHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
function App() {
  const [showpassword, setshowpassword] = useState(false)
  const [value, setvalue]=useState("show")
  const handlepassword=() => {
    setshowpassword(!showpassword)
    setvalue("hide")
  }
  
  return (
    <>
     <div className="container">
      <div className="box">
        <div className="heading"><h1>Login</h1></div>
        <div className="form">
          <div className="user">
        <label htmlFor="user">UserName</label>
        <input type="text" id='user' name='user'  className='input' /></div>
        <div className="password">
        <label htmlFor="password">Password</label>
        <input type={showpassword ? "text" : "password"}  id='password' className='input' />
        <button onClick={handlepassword}>{showpassword ? <BiSolidHide /> : <BiShowAlt />}</button>
        </div>
        <div className="login">
          <button >Login</button>
        </div>
        <div className="sign">
          <h3>Don't have an account</h3><a href="">sign up</a>
        </div>
        <div className="forgot">
          <a href="">Forgot Password?</a>
        </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
