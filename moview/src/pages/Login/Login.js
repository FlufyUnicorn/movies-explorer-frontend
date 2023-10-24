import { Navigate } from "react-router-dom";
import FormElement from "../../components/FormElement/FormElement";

import './Login.css';

function Login(props) {
  if(props.loggedIn) {
    return <Navigate to='/movies' replace />;

  }
  return (
    <main>
      <FormElement isRegister={false} handleSubmit={props.handleLogin}/>
    </main>
  )
}

export default Login;