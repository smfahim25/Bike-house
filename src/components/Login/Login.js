import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user1,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    if (user1) {
        navigate(from, { replace: true });
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error1) {
        errorElement = <div>
            <p className='text-danger'> {error1?.message} </p>
        </div>
    }
    if (error) {
        errorElement = <div>
            <p className='text-danger'> {error1?.message} </p>
        </div>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Please enter a email address');
    }
    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div className='container w-50 mx-auto'>
                <h1 className=' text-center first'>Login</h1>
                <form onSubmit={handleSignIn}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input ref={passRef} type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    {
                        errorElement
                    }
                    {
                        loading && <p>Loading...</p>
                    }
                    <button type="submit" className="btn signin-btn">Login</button>
                </form>
                <p className='mt-3 text-center'>New to Fahim's Photography? <Link className='form-link' to='/signup'>Create new account</Link></p>
                <p className='mt-3 text-center'>Forget Password? <button onClick={resetPassword} className='form-link btn btn-link'>Reset Password</button></p>
                <ToastContainer />
                <button onClick={() => signInWithGoogle()} className='google-btn text-center'><i className="fab fa-google"> </i> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;