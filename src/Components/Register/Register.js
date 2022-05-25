
import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Register.css';
// import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {

    const [signInWithGoogle, user1, error2] = useSignInWithGoogle(auth);
    // const [error1, setError1] = useState('');
    const [loading, setLoading] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorElement;

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        error,
        loading1,
        sending,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (user1) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <div>
            {error.message}
        </div>
    }

    // event handler 
    //  const handleRegister = event =>{
    //      event.preventDefault();
    //      const email= emailRef.current.value;
    //      const password= passwordRef.current.value;
    //      const name= nameRef.current.value;
    //      console.log(email,password);
    //      createUserWithEmailAndPassword(email, password);
    //  }

    const handleRegister = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // createUserWithEmailAndPassword(email, password);
        setLoading(true);

        await createUserWithEmailAndPassword(email, password);
        setLoading(false);
        const { data } = await axios.post('https://warm-sierra-80009.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        window.location.reload();
        toast('verification email sent');
    }

    const navigateLogin = event => {
        navigate('/login');
    }

    //   Redirection to home page 
    if (user) {
        navigate('/home');
    }

    return (
        <div className='form-area'>
            <form onSubmit={handleRegister} className='login-form'>
                {/* <!-- Email input --> */}

                <h2 className='text-center'>Register</h2>

                <div className="form-outline mb-4">
                    <input ref={nameRef} placeholder='Your Name' className="form-control" required />
                </div>

                <div className="form-outline mb-4">
                    <input ref={emailRef} type="email" placeholder='Email address' className="form-control" required />
                </div>


                <div className="form-outline mb-4">
                    <input ref={passwordRef} type="password" placeholder="Password" className="form-control" required />

                </div>



                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label" > Agree with our Term's and condition. </label>
                        </div>
                    </div>

                </div>
                {errorElement}

                <button type="submit" className="btn add-btn btn-block mb-4">Sign UP</button>


                <div className="text-center">
                    <p>Already a member? <b onClick={navigateLogin} className='reg-button'>Login Here</b></p>
                    <p>or sign up with:</p>


                    <button onClick={() => signInWithGoogle()} type="button" className="btn add-btn btn-block mb-4">
                        <i className="fab fa-google"></i>    sign in with google
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Register;