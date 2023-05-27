import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/Authproviders";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const {createUser, updateUserProfile} = useContext(AuthContext);
    // const createUser = UserAuth()
    const navigate = useNavigate();

    const onSubmit = data => {

        console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user
            console.log(result,loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
              console.log('user profile update')
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/');

            })
            .catch(error => console.log(error))
        })
    };

    console.log(watch("example")); 

    return (
     <>
     <Helmet>
        <title>Bistro Boss | Sign Up</title>
     </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sing up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photo" {...register("photoURL", { required: true })}  className="input input-bordered" />
                {errors.photoURL && <span className="text-red-500">photo url is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                {errors.email && <span className="text-red-500">E-mail is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password", { required: true })} name="password" className="input input-bordered" />
                {errors.password && <span className="text-red-500">Password is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Sign Up" className="btn btn-primary" />
                {/* <button className="btn btn-primary">Login</button> */}
              </div>
            </form>
            <p>Already have an account <Link to="/login">LogIn</Link></p>
          </div>
        </div>
      </div>
     </>
    );
};

export default SignUp;