import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import styles from './Login.module.scss'

import { registerUser } from '../../redux/api';
function Register({registerUser}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        const {username, email, password} = data;
        registerUser(username,email,password);
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
                        <input autoComplete='name' type="text" placeholder="Nume" {...register("username", { required: true, min: 3 })} />
                        {errors.username && errors.name.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
                    </p>
                    <p>
                        <input autoComplete='email' type="email" placeholder="E-mail" {...register("email", { required: true, min: 3 })} />
                        {errors.email && errors.email.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
                    </p>
                    <p>
                        <input autoComplete='current-password' type="password" placeholder="Parola" {...register("password", { required: true, minLength: 6 })} />
                        {errors.password && errors.password.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
                        {errors.password && errors.password.type === "minLength" && <small className='error'>Introduceți minim 6 caractere</small>}
                    </p>
                    <div className={styles.formButtons}>
                        <button className="button" >Register</button>
                        <Link to={'/reset-password'}>Ai uitat parola?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default connect(null, {registerUser})(Register)