import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./contactUs.scss";
import WhatsApp from "../../../../assets/whatsapp.png";
import ContactEmail from "../../../../assets/ContactEmail.png";
import PinLarge from "../../../../assets/PinLarge.png";
import Instagram from "../../../../assets/Instagram.png";
import Facebook from "../../../../assets/Facebook.png";
import Twitter from "../../../../assets/Twitter.png";
import Map from "../../../../assets/SchoolMap.png";
import { toggle } from "../../../../actions/landingPageActions/landingPageActions";
import { connect } from 'react-redux';

function ContactUs(props) {

  useEffect(() => {
    props.toggle();

  }, [])
  return (
    <div className="contact-us">
      <header>
        <h1>Contact Us</h1>
      </header>
      <div className="body">
        <div className="body-left">
          <div className="contact-container">
            <img src={WhatsApp} />
            <div>+973 35617635</div>
          </div>
          <div className="contact-container">
            <img src={ContactEmail} />
            <div>speakout.info.bh@gmail.com</div>
          </div>
          <div className="contact-container">
            <img src={PinLarge} />
            <div>
              Rd No 3949 <br />
              Bani Jamra, Bahrain
            </div>
          </div>
          <div className="img-container">
            <img src={Map} />
          </div>
        </div>
        <div className="body-right">
          <h2>Social Media</h2>
          <div className="contact-container">
            <img src={Instagram} />
            <div>speak_out_program</div>
          </div>
          <div className="contact-container">
            <img src={Facebook} />
            <div>speakoutinfobh</div>
          </div>
          <div className="contact-container">
            <img src={Twitter} />
            <div>speakoutbh</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    reset: state.landingPageReducer.reset,
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { toggle }
  )(ContactUs)
)