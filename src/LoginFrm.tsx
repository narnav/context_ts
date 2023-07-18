import React, { useContext } from 'react'
import { MyLogin } from './MyLogin'

const LoginFrm = () => {
  const { logged,cngLog } = useContext(MyLogin);
  return (
    <div>LoginFrm
      <hr></hr>
    <button onClick={()=>cngLog(true)}>Login</button>
    <button onClick={()=>cngLog(false)}>Logout</button>
      {logged ? "logged":"please login"}
    </div>
  )
}

export default LoginFrm