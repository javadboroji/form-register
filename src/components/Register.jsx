import React, { useState } from 'react'
import { Button, TextField, Stack, Alert, AlertTitle } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Container, Col, Row } from 'react-bootstrap'
import {  useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'


function Register({ data }) {

    const { alt, src, altImage, srcImage } = data;

    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alertregister, setAlertregister] = useState(false)
    const [passwordType, setPasswordType] = useState("password")
    const dispatch = useDispatch()
    const passwoerTypeHandler=()=>{
        passwordType==="password"? setPasswordType("text"):setPasswordType("password") 
    }
    const registerHandler = () => {
        dispatch({ type: 'REGISTER', payload: { username, email, password } });

        if (username && email && password) { setAlertregister(!alertregister) }
    }

    return (
        <>

            <Container>
                {alertregister && (<Stack sx={{ width: '100%' }} spacing={2}> <Alert variant="filled" onClose={() => { setAlertregister(false) }} severity="success"><AlertTitle>Success</AlertTitle> Register Success!</Alert></Stack>)
                }
                <div className='register-header'>
                    <img src={src} className='img-logo' alt={alt} />
                    <Button variant="outlined"> <Link to='/login' className='none-text-dec'> Sing In</Link></Button>
                </div>
                <Row>

                    <Col lg={6} md={6} sm={12}><div className='register-left-img'>
                        <img src={srcImage} className=' register-image' alt={altImage} />
                    </div></Col>
                    <Col lg={6} md={6} sm={12}><div className='register'>

                        <div className=' register-main'>
                            <form>
                                <TextField
                                    id="outlined-name"
                                    label="userName"
                                    variant="outlined"
                                    fullWidth
                                    type='text'
                                    sx={{ mt: 3 }}
                                    value={username}
                                    onChange={e => setUserName(e.target.value)}
                                />
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
                                <Button className="btn-eye" sx={{ mt: 2, px: 8 }}> <RemoveRedEyeIcon   onClick={passwoerTypeHandler}/></Button>
                                </div>
                               
                                <Button variant="contained" onClick={registerHandler} sx={{ mt: 2, px: 8 }} size="large" color="success">Register</Button>

                            </form>
                        </div>
                        <div className=' register-footer'></div>
                    </div></Col>

                </Row>
            </Container>









        </>
    )
}

export default Register