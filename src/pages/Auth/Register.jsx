import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import styles from './Login.module.scss'
import { registerUser, loginUser } from '../../redux/api';

function Register({registerUser, loginUser, isAuth, isLoading, user}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [changeAuth, setChangeAuth] = React.useState(false);
    const navigate = useNavigate()

    const onSubmit = data => {
        if (changeAuth) {
            const {username, email, password} = data;
            registerUser(username,email,password);
        }else{
            const {email, password} = data;
            loginUser(email,password);
        }
    }

    React.useEffect(() => {
        if (isAuth && user) {
            const {isAdmin, isMerchant} = user;
            if (isAdmin) {
                navigate('/profile/admin');
            }else if(isMerchant){
                navigate('/profile/merchant');
            }else{
                navigate('/profile/user');
            }
        }
    }, [isAuth, user, navigate])
    
    
    return (
        <div className={styles.authBody}>
            <div className={styles.authContent}>
                <h2>{changeAuth ? 'Registreazăte' : 'Login'}</h2>

                <div className={styles.buttonGroup}>
                    <button onClick={() => setChangeAuth(false)} className={changeAuth ? '' : styles.current}>Login</button>
                    <button onClick={() => setChangeAuth(true)} className={changeAuth ? styles.current : ''}>Registreazăte</button>
                </div>

                {changeAuth ?
                    <form id={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
                        <p>
                            <input autoComplete='name' type="text" placeholder="Nume" {...register("username", { required: true })} />
                            {errors.username && errors.username.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
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
                        {isLoading &&
                            <p>
                                <span className={styles.loading}></span>
                            </p>
                        }
                        <div className={styles.formButtons}>
                            <button disabled={isLoading} className="button" >Register</button>
                        </div>
                    </form>
                :
                <form id={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
                    <p>
                        <input autoComplete='email' type="email" placeholder="E-mail" {...register("email", { required: true, min: 3 })} />
                        {errors.email && errors.email.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
                    </p>
                    <p>
                        <input autoComplete='current-password' type="password" placeholder="Parola" {...register("password", { required: true, minLength: 6 })} />
                        {errors.password && errors.password.type === "required" && <small className='error'>Acest camp este obligatoriu</small>}
                        {errors.password && errors.password.type === "minLength" && <small className='error'>Parola trebuie sa conțina minim 6 caractere</small>}
                    </p>
                    {isLoading &&
                        <p>
                            <span className={styles.loading}></span>
                        </p>
                    }
                    <div className={styles.formButtons}>
                        <button className="button" disabled={isLoading}>Login</button>
                        <Link to={'/reset-password'}>Ai uitat parola?</Link>
                    </div>
                </form>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    isLoading: state.auth.loading,
    user: state.auth.user

})
export default connect(mapStateToProps, {registerUser, loginUser})(Register)