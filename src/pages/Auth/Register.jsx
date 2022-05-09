import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Login.module.scss'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { login } from '../../redux/api';
function Register() {
    const { currentUser, isFetching, error } = useSelector(state => state.user);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        login(dispatch, { email, password });

    }
    return (
        <div className={styles.authBody}>
            <div className={styles.authContent}>
                <h2>Registreazăte</h2>

                <div className={styles.buttonGroup}>
                    <Link to={'/login'}>Login</Link>
                    <Link className={styles.current} to={'/register'}>Registreazăte</Link>
                </div>
                <form id={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
                    <p>
                        <input autoComplete='name' type="text" placeholder="Nume/Prenume" {...register("name", { required: true, min: 3 })} />
                        {errors.name && errors.name.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
                    </p>
                    <p>
                        <input autoComplete='email' type="email" placeholder="E-mail" {...register("email", { required: true, min: 3 })} />
                        {errors.email && errors.email.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
                    </p>
                    <p>
                        <input autoComplete='current-password' type="password" placeholder="Parola" {...register("password", { required: true, min: 6 })} />
                        {errors.password && errors.password.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
                    </p>
                    <div className={styles.formButtons}>
                        <button className="button" disabled={isFetching}>Register</button>
                        <Link to={'/reset-password'}>Ai uitat parola?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register