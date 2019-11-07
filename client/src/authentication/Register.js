import React, { useState, useEffect } from 'react';
import 'register.scss';

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
<table className='top'>        
    <tr className='alignleft'>
           <td><h1> Register With Speak Out</h1></td><td style={{position: 'relative', left: 200}}><h4>Register In Person</h4></td>
            </tr>
            <tr className='alignleft'>
            <br></br>
            </tr>
            <tr className='alignleft'>
           <h4> How to Register with Speak Out</h4><td style={{position: 'relative', left: 250}}>Address</td><td style={{position: 'relative', left: 253}}> Rd No 3949, Bani Jamra, Bahrain</td><td style={{position: 'relative', top: 20, left: 50}}>6F66+65 Bani Jamra, Bahrain</td>
           <td style={{position: 'relative', top: 40, left: -294}}>Telephone</td><td style={{position: 'relative', top: 40, left: -198}}>+973 3561 7635</td>
            </tr>
            <br></br>
            <tr style={{textAlign: 'left'}}>
            <h4>1. Enter your information</h4>
            </tr>
            <tr style={{textAlign: 'left'}}>
            <h4>2. Enter student information</h4>
            </tr>
            <tr style={{textAlign: 'left'}}>
            <h4>3. Review & Submit Registration</h4><td style={{position: 'relative', left: 270}}><button style={{borderColor: '#C73642', color: '#C73642', padding: '#C73642'}}>Schedule Appointment</button></td>
            </tr>
            <br></br>
            <tr style={{textAlign: 'left'}}>
            <p></p>
            </tr>
            <tr style={{textAlign: 'left', color: 'green'}}>
            After submitting registration, you will choose
            </tr>
            <tr style={{textAlign: 'left', color: 'green'}}>
            options for the student placement test(s). 
            </tr>
            </table>
            <br></br>     
<button style={{width: '40px', height: '40px', position: 'relative', left: -470, backgroundColor: '#C73642', borderRadius: '50%', color: 'yellow'}}>✔</button>
<div style={{width: '300px', position: 'relative',top: -16, left: 222, border: '1px solid #C73642', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}></div>
<button style={{width: '40px', height: '40px', position: 'relative', top: -40, left: -146, backgroundColor: '#FFFFFF', borderRadius: '50%', color: 'yellow', borderColor: '#C73642'}}></button>
<div style={{width: '300px', position: 'relative',top: -60, left: 560, border: '1px solid #C73642', transform: 'matrix(1, 0, 0, 1, 0, 0)'}}></div>
<button style={{width: '40px', height: '40px', position: 'relative', top: -84, left: 192, backgroundColor: '#FFFFFF', borderRadius: '50%', color: 'yellow', borderColor: '#C73642'}}></button>
<div style={{position: 'relative', top: -90, left: -470, fontSize: '10px'}}>Your Information</div>
<div style={{position: 'relative', top: -106, left: -140, fontSize: '10px'}}>Student Information</div>
<div style={{position: 'relative', top: -128, left: 190, fontSize: '10px'}}>Submit Registration</div>
<div style={{position: 'relative', top: -90, left: -470, color: 'green'}}>Your Information</div>

<div>
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