import React ,{useRef}from 'react'
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/Table';
import{useNavigate }from 'react-router-dom'
import '../App.css'
import src from '../images/user.png'
import uuid from 'react-uuid'
import { useDispatch, useSelector } from 'react-redux'
function AdminPanle({ data }) {

    const users = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const logOuteHandler =()=>{
        navigate("/")
        dispatch({
            type:'LOGOUT'
        })
    }
    const delateHandler= (e)=>{
        dispatch({
            type:'DELETE',
            payload:e.currentTarget.id
        })
   
    }
    return (
        <div className='main'>
           
            <Table striped bordered hover responsive="md">
          
                <thead>
                    <tr>
                        <th> image</th>
                        <th>Username</th>
                        <th>email</th>
                        <th>password</th>
                        <th> <Button variant="contained"  onClick={logOuteHandler} color="error" size='larg'> Log Out</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {users.user.map(tableItem => {
                        return (
                            <tr key={uuid()}>
                               <td>  <img src={src} className='user-avatar' alt='user' /></td>
                                <td>{tableItem.username}</td>
                                <td>{tableItem.email}</td>
                                <td>{tableItem.password}</td>
                                <td> <Button variant="contained"  id={`${tableItem.email}`}   onClick={delateHandler} color="error" size='larg'> Delate</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>

    )
}

export default AdminPanle