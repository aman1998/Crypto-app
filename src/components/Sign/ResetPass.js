import React, {useState} from 'react';
import message from 'antd-message';

const ResetPass = ({handleSwitchLogin}) => {
  const [loadingRes, setLoadingRes] = useState(false)
  const [email, setEmail] = useState('')

  const  handleValidateEmail = (email) => {
    const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validation.test(String(email).toLowerCase());
  }

  const handleResetPost = (e) => {
    e.preventDefault()
    if (email !== '' && handleValidateEmail(email)) {
      setLoadingRes(true)
      setTimeout(() => {
        setLoadingRes(false)
        message.error('Ошибка сервера')
      }, 1000)
    }
    else if (email === '') message.error('Укажите почту')
    else if (email !== '' && !handleValidateEmail(email)) message.error('Неправильный формат Email')
  }

  return (
    <>
      <div className='reset-title'>Forgot Password</div>
      <input placeholder='Email adress' type='email' onChange={(e) => setEmail(e.target.value)}/>
      <button className='btn' onClick={(e) => handleResetPost(e)}>
        {
          loadingRes ? <div className='loading'></div> : 'send code'
        }
      </button>
      <div onClick={handleSwitchLogin} className='reset-link'>Have Login</div>
    </>
  )
}

export default ResetPass
