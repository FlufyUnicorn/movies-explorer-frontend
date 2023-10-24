import './Register.css';

import React from "react";
import FormElement from "../../components/FormElement/FormElement";

function Register(props) {
  return (
    <main>
      <FormElement isRegister={true} handleSubmit={props.handleRegister}/>
    </main>
  )
}

export default Register;