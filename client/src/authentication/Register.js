import React, { useState, useEffect } from 'react';
import './register.scss';

function Register(props) {
        const [user, setUser] = useState({
          username: '',
          password: '',
          confirmpassword: '',
          fathername: '',
          mothername: '',
          relationship: '',
          email: '',
          phone: ''
        });
      
        const [formValid, setFormValid] = useState(true);
        const [modal, setModal] = useState(false);
      
        const [email, setEmail] = useState('');
      
      
        useEffect(() => {
          console.log('LOGIN props: ', props)
        }, [])
      
        const handleChange = e => {
          setUser({
            ...user, [e.target.name]: e.target.value,
          });
          e.target.focus()
        };
        
        const handleSubmit = (e) => {
          e.preventDefault();
          if (user.username.length && user.password.length) {
            props.logIn(user, props.history);
            
            setUser({
              username: '',
              password: ''
            });
          } else {
            setFormValid(false)
          }
        };
        
        const handleEmailChange = e => {
          setEmail(e.target.value)
        }
        
        const handleEmailSubmit = e => {
          e.preventDefault();
          // Add logic to communicate with backend to send email
          setEmail('');
          setModal(false);
        }
         
    return (
        <div>
<div className='top'>        
    <div>
           <div className='alignleft'><h1> Register With Speak Out</h1></div>
           <div className='leftperson'><h4>Register In Person</h4></div>
            </div>
            <div>
            <br></br>
            </div>
            <div className='alignleft'>
           <h4> How to Register with Speak Out</h4>
           <div className='persondiv'>
           <div className='leftaddress'>Address</div>
           <div className='leftroad'> Rd No 3949, Bani Jamra, Bahrain</div>
           <div className='leftbahrain'>6F66+65 Bani Jamra, Bahrain</div>
           <div className='leftphone'>Telephone</div>
           <div className='leftphonenum'>+973 3561 7635</div>
           <div className='leftschedule'><button className='buttonred'>Schedule Appointment</button></div>
           </div>
           </div>
            <br></br>
            <div className ='instruct'>
            <div className='alignleft'>
            <h4>1. Enter your information</h4>
            </div>
            <div className='alignleft'>
            <h4>2. Enter student information</h4>
            </div>
            <div className='alignleft'>
            <h4>3. Review & Submit Registration</h4>
            </div>
            <br></br>
            <div className='alignleft'>
            <p></p>
            </div>
            <div className='alignleftgreen'>
            After submitting registration, you will choose
            </div>
            <div className='alignleftgreen'>
            options for the student placement test(s). 
            </div>
            </div>
            </div>
            <br></br>     
<div className='line1'></div>
<button className='button1'>✔</button>
<button className='button2'></button>
<button className='button3'></button>
<div className='buttonlabel1'>Your Information</div>
<div className='buttonlabel2'>Student Information</div>
<div className='buttonlabel3'>Submit Registration</div>
<div className='your'>Your Information</div>

<div className='formdata'>
        <form onSubmit={handleSubmit} method="POST">
          <fieldset>
          <label htmlFor="username">User</label>
            <input
              style={{ marginBottom: "15px" }}
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={user.username}
            />
            <label htmlFor="fathername">Father Name</label>
            <input
              style={{ marginBottom: "15px" }}
              className="input-class"
              type="text"
              name="Fathername"
              onChange={handleChange}
              value={user.fathername}
            />
            <label htmlFor="mothername">Mother Name</label>
            <input
              style={{ marginBottom: "15px" }}
              type="text"
              name="mothername"
              placeholder="Mothername"
              onChange={handleChange}
              value={user.mothername}
            />
            <label htmlFor="relationship">Relationship</label>
            <input
              style={{ marginBottom: "15px" }}
              type="text"
              name="relationship"
              placeholder="Relationship"
              onChange={handleChange}
              value={user.relationship}
            />
            <div>
            <label htmlFor="email">Email</label>
            <input
              style={{ marginBottom: "15px" }}
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={user.email}
            />
            <label htmlFor="password">Password</label>
            <input
              style={{ marginBottom: "15px" }}
              className="input-class"
              type="password"
              name="password"
              onChange={handleChange}
              value={user.password}
            />
            <label htmlFor="confirmpassword">ConfirmPassword</label>
            <input
              style={{ marginBottom: "15px" }}
              className="input-class"
              type="password"
              name="confirmpassword"
              onChange={handleChange}
              value={user.confirmpassword}
            />
            <label htmlFor="phone">Telephone</label>
            <input
              style={{ marginBottom: "15px" }}
              className="input-class"
              type="text"
              name="phone"
              onChange={handleChange}
              value={user.phone}
            />
            </div>
            <span style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => { setModal(true) }}></span>
            <button style={{position: 'relative', top: 0, left: 370, borderColor: '#C73642', color: '#C73642', padding: '#C73642'}} type="submit">Next Student Information</button>
          </fieldset>
        </form>
        {
          modal ?
            <form onSubmit={handleEmailSubmit}>
              <input type="email" name="email" placeholder="Email address" onChange={handleEmailChange} value={email} />
              <button style={{position: 'relative', top: 0, left: 370, borderColor: '#C73642', color: '#C73642', padding: '#C73642'}}>Submit</button>
            </form> : null
        }

      </div>

    </div>
    )
}

export default Register;