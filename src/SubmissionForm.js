import React from 'react';
import './css/SubmissionForm.css'
import { Button, Form } from 'react-bootstrap';


const SubmissionForm = () => {
    return (
        <div><br/><br/><br/><br/><br/><br/>
            <div className='submitform'>
                <h1>Submission Form</h1>
                <br />
                Please provide detailed information about your
                small-cap token project by<br />filling 
                out the submission form.<br/><br/><br/>
                <Form className='form1'>
                <input type="checkbox" className='checkbox'
                /> Terms and Privacy Policy*<br/><br/>
                <Button className='submit-btn'>Click here to get the 
                    form</Button><br/><br/>
                    Submit your small-cap token project for a comprehensive AI-powered analysis.
                </Form>
            </div><br/><br/><br/><br/>
        </div>
    );
}

export default SubmissionForm;
