import React from 'react';
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../redux/api'

function Profile({logOut}) {
    const navigate = useNavigate()
    const logout = () =>{
        logOut()
        navigate('/');
    }
    
  return (
    <div>
        <button onClick={logout} style={{padding: '14px 28px', width: 'fit-content'}} className="button button__accent">Logout</button>
    </div>
  )
}

export default connect(null, {logOut})(Profile)