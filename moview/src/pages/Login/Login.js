import './Login.css';
import FormElement from "../../components/FormElement/FormElement";

function Login(props) {
  return (
    <main>
      <FormElement isRegister={false} handleSubmit={props.handleLogin}/>
    </main>
  )
}

export default Login;