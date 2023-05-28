import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/Authproviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/Social/SocialLogin';

const Login = () => {

    const [disabled, setdisabled] = useState(true)

    const { signIn, loading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    console.log(loading);
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("your data ", email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                // Try me! 
                Swal.fire({
                    title: 'Custom animation with Animate.css',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true });
            })

    }

    const handleChaptcha = (e) => {
        const user_captcha_value = e.target.value;
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            console.log(user_captcha_value);
            setdisabled(false);
        }
        else {
            setdisabled(true)
        }



    }

    return (
        <>
            <Helmet>
                <title>Bistro-boss-restuarant | LogIn</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleChaptcha} name="captcha" placeholder="type captcha" className="input input-bordered" />
                                {/* <button  className='btn btn-outline btn-xs mt-4'>validate</button> */}
                            </div>
                            <div className="form-control mt-6">

{/* todo : make button disable for chaptch */}
                                <input type="submit" disabled={disabled} className="btn btn-primary" value="login" />
                            </div>
                        </form>
                        <p><small>New Here ? <Link to='/signup'>Create an account</Link></small></p>
                       <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;