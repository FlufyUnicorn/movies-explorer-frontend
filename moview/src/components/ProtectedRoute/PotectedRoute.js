import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, ...props }) {
  return (
      props.loggedIn === true ? <Component {...props} /> : <Navigate to='/' replace/>
  )
}

export default ProtectedRoute;