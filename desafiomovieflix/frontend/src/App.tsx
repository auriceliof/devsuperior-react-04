import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/custom.scss';
import Routes from 'Routes';
import { useState } from 'react';
import { AuthContext, AuthContextData } from 'AuthContext';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [ authContextData, setAuthContextData ] = useState<AuthContextData>({
    authenticated: false,
  });
  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }} >
      <Routes />
      <ToastContainer autoClose={8000} limit={1} />
    </AuthContext.Provider>
  );
}

export default App;
