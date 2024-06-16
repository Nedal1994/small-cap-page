import React, {useState} from 'react';
import { Button, Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import '../src/css/Login.css'
import { Link } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Log In</h1>
<br/>
Create a new account with your email

      <Card className='login-card'
      style={{
        width: "600px",
        height: "550px",
        border: 'solid',
        borderColor:'white',
        borderRadius: '21px',
        float: 'right',
        top:'100px',
        right:'150px',
        borderRadius: '21px',
        border: 'solid',
        background: 'rgba(255, 255, 255, 0.43)',
        color:'white',
        fontSize:'x-large'
       }}
      >
        <Card.Body>
          <Form onSubmit={handleLogin}>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='label'>Email address</Form.Label>
              <Form.Control 
              type="email" 
              value={email}
              className='control'
              onChange={(e) => setEmail(e.target.value)}
              />

              <br/>
              <Form.Label className='label' htmlFor="inputPassword5">Password</Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                value={password}
                className='control'
                onChange={(e) => setPassword(e.target.value)}

              />
            </Form.Group>


            <Form.Group className='group2'
                  style={{
                    textAlign:'center'
                   }}
            >
            <br />
            <Button 
            className='login-btn'
            style={{
              width: "500px",
              height: "62px"
            }}

            >Login</Button>
            <br />
            <br />
            <a href='/'>Forgot password ?</a>
            <br />
            <br />
            {/* <Link to='/signup'>Sign up</Link> */}
            <a>Don’t have an account? <a className='signup' href='/signup'>Sign up</a></a>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}