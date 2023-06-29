import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const {isAuth} = useSelector(state => {
    return {
        isAuth: state.auth.token
    }
  });
  console.log(isAuth);
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;