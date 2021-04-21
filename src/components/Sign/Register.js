import React, {useState} from 'react';
import message from 'antd-message';

const Register = ({handleSwitchLogin, handleSwitchRegister, login}) => {
  const [loadingRegister, setLoadingRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const  handleValidateEmail = (email) => {
    const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validation.test(String(email).toLowerCase());
  }

  const handleRegisterPost = (e) => {
    e.preventDefault()
    if (email !== '' && password !== '' && password === password2 && handleValidateEmail(email)) {
      setLoadingRegister(true)
      setTimeout(() => {
        setLoadingRegister(false)
        message.error('Ошибка сервера')
      }, 1000)
    }
    else if (email !== '' && !handleValidateEmail(email)) message.error('Неправильный формат Email')
    else if (email === '') message.error('Укажите почту!')
    else if (password !== password2) message.error('Пароли не совпадают')
    else if (password === '' || password2 === '') message.error('Укажите пароль!')
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
      <input placeholder='Repeat Password' onChange={(e) => setPassword2(e.target.value)}/>
      <button className='btn' onClick={(e) => handleRegisterPost(e)}>
      {loadingRegister ? <div className='loading'></div> : 'register'}</button>
      <div onClick={handleSwitchLogin} className='reset-link'>Have Login</div>
    </> 
  )
}

export default Register
