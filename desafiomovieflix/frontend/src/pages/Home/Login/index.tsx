import { AuthContext } from 'AuthContext';
import ButtonIcon from 'components/ButtonIcon';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { getTokenData } from 'utils/auth';
import { requestBackendLogin, saveAuthData } from 'utils/requests';
import './styles.css';

type FormData = {
  username: string;
  password: string;
}

type LocationState = {
  from: string;
}

const Login = () => {

  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/movies'} };

  const { setAuthContextData } = useContext(AuthContext);

  const [ hasError, setHasError ] = useState(false);

  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = ( formData : FormData ) => {
    requestBackendLogin(formData)
    .then(response => {
      saveAuthData(response.data);
      setHasError(false);
      setAuthContextData({
        authenticated: true,
        tokeData: getTokenData(),              
    })
      history.replace(from);
    })
    .catch(error => {
      setHasError(true);
      console.log('ERRO', error);
    });    
  };

  return (
    <div className="base-card login-card">
      <div>
        <h1>LOGIN</h1>
      </div>
      {hasError && (
        <div className="alert alert-danger">
          <h6>Ocorreu um erro de login!</h6>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <input
            {...register('username', {
              required: 'Campo obrigatório!',
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email invalido!'
              }
            })}
            type="text"
            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>
        <div className='mb-4'>
          <input
            {...register('password', {
              required: 'Campo obrigatório!'
            })}
            type="password"
            className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>
        <div className="btn-Login">
          <ButtonIcon text="Fazer login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
