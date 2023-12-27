import React,{useState} from 'react';

function LoginPage() {
  const [data,setDate] =useState({
    username : '',
    password : ''
  })
  const {username,password} =data;
  const changeHandler = e => {
    setDate({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" name= 'username' value={username} onChange={changeHandler}/><br />
          <input type="password" name='password' value={password} onChange={changeHandler}/><br />
          <input type="submit" name='Login' />
        </form>
      </center>
    </div>
  )
}

export default LoginPage;
