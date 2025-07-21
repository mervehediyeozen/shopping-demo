import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ element: Element, ...rest }) {
  const isLogged = useSelector(state=> state.shop.isLogged);

  // Eğer kullanıcı giriş yapmamışsa, anasayfaya yönlendir.
  return isLogged ? <Element {...rest} /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
