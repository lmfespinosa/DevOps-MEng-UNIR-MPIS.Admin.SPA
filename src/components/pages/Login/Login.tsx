import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.scss';

type Inputs = {
  username: string,
  password: string,
};
// Método “/api/v1/is-valid-user-by-email-pass”
const Login: React.FC = function (props: any) {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => {
    console.log(data)
    const url = '/api/v1/is-valid-user-by-email-pass';

    // fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(data), // data can be `string` or {object}!
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then((res) => res.json())
    //   .then((response) => {
    //     console.log('Success:', response)
    //   })
    //   .catch(error => console.error('Error:', error))

    handleRedirect();
  };

  const handleRedirect = () => {
    const { history } = props;
    history.push("/listado-de-dispositivos")
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <section className="login">
              <form
                className="regular-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label htmlFor="username">
                  <span className="label-text">USERNAME</span>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username@email.com"
                    ref={register({
                      required: true
                    })}
                  />
                </label>
                {errors.username && <p className="error__message">This field is required</p>}
                <label htmlFor="password">
                  <span className="label-text">PASSWORD</span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="********"
                    ref={register({
                      required: true
                    })}
                  />
                </label>
                {errors.password && <p className="error__message">This field is required</p>}
                <div className="btns-container">
                  <button type="submit">Siguiente</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;