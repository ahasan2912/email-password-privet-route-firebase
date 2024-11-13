import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogInBtn = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)

        //SignIn for Login
        signInUser(email, password)
        .then((result) =>{
            console.log(result.user);
            event.target.reset();
            navigate('/');
        })
        .catch((error) =>{
            console.log(error.message);
        })
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then((result)=>{
            console.log(result.user)
            navigate('/')
        })
        .catch(error =>{
            console.log("Error", error.message)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogInBtn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='ml-4 mb-4'>
                        If You have not account? please <Link to="/register">Register</Link>
                    </p>
                    <p>
                        <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;