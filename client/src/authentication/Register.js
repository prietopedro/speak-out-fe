import React, { useState } from "react";
import "./register.scss";

function Register(props) {
  const [step, setStep] = useState(1);

  const nextStep = e => {
    e.preventDefault();
    setStep(step + 1);
  };

  return (
    <div className="parent-reg">
      <div className="top-section">
        <div className="top-left">
          <h1>Register With Speak Out</h1>
          <p>How to Register with Speak Out</p>
          <p>
            1. Enter your information
            <br />
            2. Enter student information
            <br />
            3. Review &amp; Submit Registration
          </p>
          <p className="top-left-end">
            After submitting registration, you will choose <br />
            options for the student placement test(s).
          </p>
        </div>
        <div className="top-right">
          <h4>Register in Person</h4>
          <div className="contact-container">
            <div className="address">
              <p className="contact-first">Address</p>
              <p className="contact-second">
                Rd No 3949, Bani Jamra, Bahrain
                <br />
                6F66+65 Bani Jamra, Bahrain
              </p>
            </div>
            <div className="telephone">
              <p className="contact-first">Telephone</p>
              <p className="contact-second">+973 3561 7635</p>
            </div>
            <button>Schedule Appointment</button>
          </div>
        </div>
      </div>
      <div className="horiz-line" />
      <div className="progress-bar">
        <div className="circles">
          <div className={step >= 1 ? "active" : ""}>
            {step >= 1 ? "✔" : ""}
          </div>
          <div className={step >= 2 ? "active" : ""}>
            {step >= 2 ? "✔" : ""}
          </div>
          <div className={step >= 3 ? "active" : ""}>
            {step >= 3 ? "✔" : ""}
          </div>
        </div>
        <div className="circle-labels">
          <p>Your Information</p>
          <p>Student Information</p>
          <p>Submit Registration</p>
        </div>
      </div>
      <div className="reg-form">
        <h4>Your Information</h4>
        <form>
          {step === 1 && (
            <fieldset>
              <input type="text" name="username" placeholder="Username" />
              <input
                type="text"
                name="father_name"
                placeholder="Father's Name"
              />
              <input
                type="text"
                name="mother_name"
                placeholder="Mother's Name"
              />
              <input type="email" name="email" placeholder="Email" />
              <input
                type="text"
                name="primary_telephone"
                placeholder="Primary Telephone"
              />
              <input
                type="text"
                name="secondary_telephone"
                placeholder="Secondary Telephone"
              />
              <input type="password" name="password" placeholder="Password" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </fieldset>
          )}
          {step === 2 && (
            <fieldset>
              <input type="text" name="first_name" placeholder="First Name" />
              <input
                type="text"
                name="additional_names"
                placeholder="Surname"
              />
              <input type="text" name="cpr" placeholder="Student CPR ID" />
              <input type="email" name="email" placeholder="Email" />
              <input
                type="date"
                name="birthdate"
                placeholder="Student Birthday"
              />
            </fieldset>
          )}

          <button onClick={nextStep}>Next: Student Information</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
