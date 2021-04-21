import React, {useState} from 'react';

import { Navigation, Login, Register, ResetPass } from '../components/index';

const SignPage = () => {
  const [login, setLogin] = useState(true)
  const [register, setRegister] = useState(false)
  const [resetPass, setResetPass] = useState(false)

  const handleSwitchLogin = (e) => {
    e.preventDefault()
    setLogin(true)
    setRegister(false)
    setResetPass(false)
  }

  const handleSwitchRegister = (e) => {
    e.preventDefault()
    setLogin(false)
    setRegister(true)
    setResetPass(false)
  }

  const handleSwitchResetPass = () => {
    setLogin(false)
    setRegister(false)
    setResetPass(true)
  }

  return (
    <div className='sign'>
      <Navigation />
      <div className='sign__content container'>
        <form className='form'>
          {
            login ? 
            <Login 
              login={login}
              handleSwitchLogin={handleSwitchLogin} 
              handleSwitchRegister={handleSwitchRegister} 
              handleSwitchResetPass={handleSwitchResetPass}
              resetPass={resetPass}
              />
            : 
            register ?
            <Register 
              login={login}
              handleSwitchLogin={handleSwitchLogin} 
              handleSwitchRegister={handleSwitchRegister} 
            />
            : 
            <ResetPass 
              handleSwitchLogin={handleSwitchLogin}
            />
          }
        </form>
      </div>
    </div>
  )
}

export default SignPage
