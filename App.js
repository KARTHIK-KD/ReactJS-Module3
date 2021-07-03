
import React, { Component } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class App extends Component {
  render() {
    const fb = (res) => {
      console.log(res);
    }
    const resg = (res) => {
      console.log(res);
    }
    return (
      <div className="design">
        <h1 style={{fontFamily:"Times new Roman"}}>Open ID Authentication Application</h1>
          <table border="10" bgcolor="black" bordercolor="white">
            <tr>
              <h2 style={{fontFamily:"Times new Roman"}}>Welcome <br/>To<br/> Google And Facebook Signup Page</h2>
              <br/>
              <br/>
              <table border="10" bgcolor="white" cellPadding="10" >
                <tr>
                  <td><h1></h1></td>
                  <td>
                    <FacebookLogin appId="1504870353016955" fields="name,email,picture" callback={fb} />
                  </td>
                  <td>
                  </td>
                  <td>
                    <GoogleLogin clientId="461794400646-fvmbcr8anbl4ib7airkstuv0itrmp9lk.apps.googleusercontent.com" buttonText="LOGIN WITH GOOGLE" onSuccess={resg} onFailure={resg} />
                  </td>
                  <td>
                  </td>
                </tr>
              </table>
            </tr>
          </table>
      </div>
    );
  }
}

export default App;