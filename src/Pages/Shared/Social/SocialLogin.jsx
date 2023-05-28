import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/Authproviders";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

  const { googleSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSingIn()
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // copy
        // createUser(data.email, data.password)
        // .then(result => {
        //     const loggedUser = result.user
        //     console.log(result,loggedUser);
        //     updateUserProfile(data.name, data.photoURL)
        //     .then(() => {

        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {


            navigate(from, { replace: true });

          })




        // })
        // .catch(error => console.log(error))
      })

    // })
  }

  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center my-4">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;