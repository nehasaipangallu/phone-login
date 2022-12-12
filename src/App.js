import React from 'react';
import './style.css';
import { app } from './firebase';
import { getAuth } from 'firebase/auth';
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';

//const auth = getAuth(app);

const onSignInSubmit = (e) => {
  alert("hello");
  // configureCaptcha();
  // //const phoneNumber = "+91" + state.mobile;
  // const phoneNumber = '+918971044793';
  // console.log(phoneNumber);
  // const appVerifier = window.recaptchaVerifier;
  // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  //   .then((confirmationResult) => {
  //     // SMS sent. Prompt user to type the code from the message, then sign the
  //     // user in with confirmationResult.confirm(code).
  //     window.confirmationResult = confirmationResult;
  //     console.log('OTP has been sent');
  //     // ...
  //   })
  //   .catch((error) => {
  //     // Error; SMS not sent
  //     // ...
  //     console.log('SMS not sent');
  //   });
};
const onSubmitOTP = (e) => {
  // e.preventDefault();
  // //const code = this.state.otp;
  // const code = '123456';
  // console.log(code);
  // confirmationResult
  //   .confirm(code)
  //   .then((result) => {
  //     // User signed in successfully.
  //     const user = result.user;
  //     console.log('logged in');
  //   })
  //   .catch((error) => {
  //     // User couldn"t sign in (bad verification code?)
  //   });
};

function App() {
  const configureCaptcha = () => {
    //const auth = getAuth(app);
    // getAuth(app).languageCode = "in";
    // window.recaptchaVerifier = new RecaptchaVerifier(
    //   "sign-in-button",
    //   {
    //     size: "invisible",
    //     callback: (response) => {
    //       // reCAPTCHA solved, allow signInWithPhoneNumber.
    //       onSignInSubmit();
    //     }
    //   },
    //   getAuth(app)
    // );
  };
  return (
    <div>
      <h2>Login Form</h2>
      <form >
        <div id="sign-in-button"></div>
        <input type="number" name="mobile" placeholder="Mobile number" />
        <button type="submit" onClick={onSignInSubmit}>Send OTP</button>
      </form>

      <h6>Enter OTP</h6>
      <form>
        <input type="number" name="otp" placeholder="OTP Number" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default App;
