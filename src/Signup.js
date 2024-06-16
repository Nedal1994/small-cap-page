import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import '../src/css/Signup.css'

const Signup = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [confrimEmail, setConfirmEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Sign up</h1>
      <br/>
Sign up with your email
      <Card
        style={{
          width: "600px",
          height: "960px",
          border: 'solid',
          borderColor:'white',
          borderRadius: '21px',
          top:'20px',
          float: 'right',
          right:'150px',
          borderRadius: '21px',
          border: 'solid',
          background: 'rgba(255, 255, 255, 0.43)',
          marginBottom:'90px'
        }}
      >
        <Card.Body>
          <Form onSubmit={handleSignUp}
          style={{
            color:'white',
            fontSize:'x-large'
          }}
          >

            <Form.Label className='label'>First name</Form.Label>
            <Form.Control
              value={firstName}
              className='control'
              onChange={(e) => setFirstName(e.target.value)}
            />

            <br />
            <Form.Label className='label'>Last name</Form.Label>
            <Form.Control
              value={lastName}
              className='control'
              onChange={(e) => setLastName(e.target.value)}
            />

            <br />

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='label'>Email address</Form.Label>
              <Form.Control
                type="email"
                className='control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <Form.Label className='label'>Confirm email</Form.Label>
              <Form.Control
                type="email"
                className='control'
                value={confrimEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />

              <br />
              <Form.Label className='pass-label1'>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                className='control'
                onChange={(e) => setPassword(e.target.value)}

              />
              <br />

              <Form.Label className='pass-label2'>Password confirm</Form.Label>

              <Form.Control
                type="password"
                id="inputPassword5"
                value={confirmPassword}
                className='control'
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group>

              <Button type='submit'
                style={{
                  marginRight:'30px',
                marginLeft:'50px',
                backgroundColor:'rgba(74, 7, 50, 1)',
                borderColor:'rgba(255, 255, 255, 1)',
                width:'120px',
                height:'50px',
                fontSize:'22px',
                borderRadius:'21px'
                }}
                className='btn'


              >Sign up</Button>




              <Button href='/login'
                className='btn2'
                style={{
                textAlign:'center',
                backgroundColor:'rgba(74, 7, 50, 1)',
                borderColor:'rgba(255, 255, 255, 1)',
                width:'350px',
                height:'50px',
                fontSize:'22px',
                borderRadius:'21px'
                
                }}
              >

                Already having account ? Login</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Signup;