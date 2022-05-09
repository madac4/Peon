import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import styles from './Login.module.scss'
import { login } from '../../redux/api';

function Login() {
    const { currentUser, isFetching, error } = useSelector(state => state.user);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        login(dispatch, { email, password });
    }
    const routeChange = () => {
        if (currentUser !== null) {
            let path = `/`;
            navigate(path);
        }
    }
    return (
        <div className={styles.authBody}>
            <div className={styles.authContent}>
                <h2>Login</h2>
                {error &&
                    <span className={styles.error}>Ați introdus datele greșite</span>
                }
                <div className={styles.buttonGroup}>
                    <Link className={styles.current} to={'/login'}>Login</Link>
                    <Link to={'/register'}>Registreazate</Link>
                </div>
                <form id={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
                    <p>
                        <input autoComplete='email' type="email" placeholder="E-mail" {...register("email", { required: true, min: 3 })} />
                        {errors.email && errors.email.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
                    </p>
                    <p>
                        <input autoComplete='current-password' type="password" placeholder="Parola" {...register("password", { required: true, min: 6 })} />
                        {errors.password && errors.password.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
                    </p>
                    <div className={styles.formButtons}>
                        <button onClick={routeChange} className="button" disabled={isFetching}>Login</button>
                        <Link to={'/reset-password'}>Ai uitat parola?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login