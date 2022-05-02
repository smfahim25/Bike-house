import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [setError1] = useState('');
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const confirmPass = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (user) {
        navigate(from, { replace: true });
    }
    if (user1) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <div>
            <p className='text-danger'> {error?.message} </p>
        </div>
    }
    const handleSignUp = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const confirmPassword = confirmPass.current.value;
        if (password !== confirmPassword) {
            setError1('!!Password Does Not Match!!');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-center first'>Register Your Account</h1>
            <form onSubmit={handleSignUp}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Your name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder='Type your name' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type your email' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input ref={passRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Type your password' required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input ref={confirmPass} type="password" className="form-control" id="exampleInputPassword2" placeholder='Confirm password' required />
                </div>
                {
                    errorElement
                }
                <button type="submit" className="btn signin-btn">Register</button>
            </form>
            <p className='mt-3 text-center'>Already have an account? <Link className='form-link' to='/login'>Sign In</Link></p>
            <div>
                <p className='google-sign'></p>
            </div>
            <button onClick={() => signInWithGoogle()} className='google-btn'><i className="fab fa-google"></i> Google Sign In</button>
        </div>
    );
};

export default Signup;