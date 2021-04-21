import React, {useState} from 'react';
import message from 'antd-message';

const Login = ({handleSwitchLogin, handleSwitchRegister, login,  handleSwitchResetPass}) => {
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const  handleValidateEmail = (email) => {
    const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validation.test(String(email).toLowerCase());
  }

  const handleLoginPost = (e) => {
    e.preventDefault()
    if (email !== '' && password.length >= 6 && handleValidateEmail(email)) {
      setLoadingLogin(true)
      setTimeout(() => {
        setLoadingLogin(false)
        message.error('Ошибка сервера')
      }, 1000)
    }
    else if (email !== '' && !handleValidateEmail(email)) message.error('Неправильный формат Email')
    else if (email === '') message.error('Укажите почту!')
    else if (password.length < 6) message.error('Пароль должен иметь больше 5 символов!')
  }

  return (
    <>
    <div className='switcher'>
      <button 
        className={`switcher__btn switcher__btn--1 ${login && 'switcher-active'}`} 
        onClick={(e) => handleSwitchLogin(e)}>log in</button>
      <button 
      className={`switcher__btn switcher__btn--2 ${!login && 'switcher-active'}`}
      onClick={(e) => handleSwitchRegister(e)}>register</button>
    </div>
    <input placeholder='Email adress' type='email' onChange={(e) => setEmail(e.target.value)}/>
    <input placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
    <button className='btn' onClick={(e) => handleLoginPost(e)}>
      {loadingLogin ? <div className='loading'></div> : 'log in'}
    </button>
    <div onClick={handleSwitchResetPass} className='reset-link'>Forgot Password</div>
  </>
  )
}

export default Login
