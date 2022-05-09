import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Login.module.scss'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

import { login } from '../../redux/api';
function Reset() {
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
                <h2>Resetarea Parolei</h2>
                <p>
                    Inrodu adresa de email pentru a reseta parola
                </p>
                <form id={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
                    <p>
                        <input autoComplete='email' type="email" placeholder="E-mail" {...register("email", { required: true, min: 3 })} />
                        {errors.email && errors.email.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
                    </p>
                    <div className={styles.formButtons}>
                        <button className="button" disabled={isFetching}>Trimite Confirmarea</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reset