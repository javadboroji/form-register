import React, { useState } from 'react'
import { Button, TextField, Stack, Alert, AlertTitle } from '@mui/material'
import { Container, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import '../App.css'

function Login({ data }) {
  const { alt, src, altImage, srcImageLogin } = data
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alertLoin, setAlertLoin] = useState(false)
  const [passwordType, setPasswordType] = useState("password")

  const users = useSelector(state => state)
  const dispatch = useDispatch()
  const passwoerTypeHandler = () => {
    passwordType === "password" ? setPasswordType("text") : setPasswordType("password")
  }
  const loginHandle = () => {
    const filterLogin = users.user.find(obj => obj.email === email && obj.password === password)
    filterLogin && dispatch({ type: 'LOGIN', payload: { login: true } });
    !users.login && setAlertLoin(true)
  }
  return (
    <>
      <Container>
        <Row>
          {users.login ? <Navigate to='/dashbord' />
            : alertLoin && (
              <Stack sx={{ width: '100%' }} spacing={2}> <Alert variant="filled" onClose={() => { setAlertLoin(false) }} severity="error"><AlertTitle>Warning</AlertTitle> incrrect emil or password </Alert></Stack>)
          }
          
          <div className='register-header'>
            <img src={src} className='img-logo' alt={alt} />
            <Button variant="outlined"><Link to='/' className='none-text-dec'>Register</Link></Button>
          </div>
          <Col lg={6} md={6} sm={12}><div className='register-left-img'>
            <img src={srcImageLogin} className=' register-image' alt={altImage} />
          </div></Col>
          <Col lg={6} md={6} sm={12}><div className='register'>

            <div className=' register-main'>
              <form>

                <TextField id="outlined-email"
                  label="email"
                  variant="outlined"
                  fullWidth
                  type='email'
                  sx={{ mt: 3 }}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <div className='password-inp-box'>
                  <TextField
                    id="outlined-pas"
                    label="password"
                    variant="outlined"
                    fullWidth
                    type={passwordType}
                    sx={{ mt: 3 }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <Button className="btn-eye" sx={{ mt: 2, px: 8 }}> <RemoveRedEyeIcon onClick={passwoerTypeHandler} /></Button>

                </div>
                <Button onClick={loginHandle} variant="contained" sx={{ mt: 2, px: 8 }} size="large" color="success">Login</Button>
              </form>
            </div>
            <div className=' register-footer'></div>
          </div></Col>

        </Row>
      </Container>

    </>
  )
}

export default Login