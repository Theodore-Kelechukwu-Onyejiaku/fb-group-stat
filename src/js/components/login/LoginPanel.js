import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import {Link} from 'react-router';

const LoginPanel = ({
  onPhoneNumberLogin,
  onEmailLogin,
  onFBLogin
}) => {
   return (
     <div className="panel pulse">
       <h4>Login With</h4>
       <hr />
       <a
         href="#"
         className="btn btn-primary"
         onClick={onFBLogin} >
         Facebook
       </a>
     </div>
   )
}

LoginPanel.propTypes = {
  onPhoneNumberLogin: PropTypes.func,
  onEmailLogin: PropTypes.func,
  onFBLogin: PropTypes.func
}

 export default LoginPanel;
