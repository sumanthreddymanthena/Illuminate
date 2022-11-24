
import ReactDOM from 'react-dom';
import { redirect, useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Snackbar } from '@mui/material';
import { useState } from 'react';


function App() {
  return <Button variant="contained">hello</Button>;
  <Snackbar message="submitted succesfully" autoHideDuration={3000}></Snackbar>
  
}




const Form1 = () =>{
  
  let history=useHistory();
  
  return (
    <>
    
    
    <div className='container border rounded d-block bg-secondary bg-gradient' >
    <div className='mt-5 d-grid gap-3'>
    <h1>Survey</h1>
    
    <Formik
    initialValues={{
      picked1: '',
      picked2:' ',
      picked3:' '
    }}
    
    onSubmit={ (values) => {
      
      console.log('form submitted')
      fetch('http://localhost:5000/form/submitForm', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        
        firstCode : values.picked1,
        backendLanguage : values.picked2,
        frontendFramework: values.picked3
        
      })
      
    })
    .then(response=>response.json())
    
    
    history.push("/formsubmitted")
  }}
  
  
  >
  {({ values }) => (
    <Form>
    
    <div className='d-grid gap-3'>
    <div id="my-radio-group" className='font-weight-bold'>1- Writing that first line of code</div>
    <div role="group" aria-labelledby="my-radio-group" className='ms-2'>
    <label>
    <Field type="radio" name="picked1" value="15-20 years" />
    15-20 years
    </label>
    <label>
    <Field type="radio" name="picked1" value="20-29 years" />
    20-29 years
    </label>
    <label>
    <Field type="radio" name="picked1" value="29+ years" />
    29+ years
    </label>
    <div>Your choice:<span className='fw-bold'> {values.picked1} </span></div>
    </div>
    <div >
    <div id="my-radio-group" className='font-weight-bold'>2-Backend language</div>
    <div role="group" aria-labelledby="my-radio-group" className='ms-2'>
    <label>
    <Field type="radio" name="picked2" value="JavaScript" />
    JavaScript
    </label>
    <label>
    <Field type="radio" name="picked2" value="Java" />
    Java
    </label>
    <label>
    <Field type="radio" name="picked2" value="Python" />
    Python
    </label>
    <div>Your choice:<span className='fw-bold'> {values.picked2} </span></div>
    </div>
    </div>
    <div>
    <div id="my-radio-group" className='font-weight-bold'>What is the most commonly used web framework?</div>
    <div role="group" aria-labelledby="my-radio-group" className='ms-2'>
    <label>
    <Field type="radio" name="picked3" value="React" />
    React
    </label>
    <label>
    <Field type="radio" name="picked3" value="jQuery" />
    jQuery
    </label>
    <label>
    <Field type="radio" name="picked3" value="Express" />
    Express
    </label>
    <label>
    <Field type="radio" name="picked3" value="Angular" />
    Angular
    </label>
    <label>
    <Field type="radio" name="picked3" value="ASP.NET core" />
    ASP.NET core
    </label>
    <label>
    <Field type="radio" name="picked3" value="Vue.js" />
    Vue.js
    </label>
    <div>Your choice:<span className='fw-bold'> {values.picked3} </span></div>
    </div>
    </div>
    <div className='d-inline'>
    <Button style= {{
      borderRadius: 30,
      backgroundColor: "#616161",
      padding: "12px 24px",
      fontSize: "12px"
    }} variant="contained" type="submit" className="btn btn-primary">Submit</Button>
    
    </div>
    </div>
    </Form>
    
    )}
    </Formik>
    </div>
    </div>
    </>
    )};
    
    export default Form1;
    