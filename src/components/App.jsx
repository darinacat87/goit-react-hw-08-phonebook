import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/authSlice';
//import { useGetCurrentUserQuery } from 'redux/authApi';
import Contacts from 'view/ContactsView';
import LoginView from 'view/LoginView';
import RegisterView from 'view/RegisterView';
import Navigation from './Navigation/Navigation';
import PrivateRoute from 'route/PrivatRoute';
import PublicRoute from 'route/PublicRoute';

function App() {
  const token = useSelector(getToken);
  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>{!token && <LoginView />}</PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
