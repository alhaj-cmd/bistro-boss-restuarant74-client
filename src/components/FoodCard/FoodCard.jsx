import { useContext } from "react";
import { AuthContext } from "../../providers/Authproviders";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
  // console.log(item);
    const {name, image, price, recipe, _id}  = item;

    const {user} = useContext(AuthContext);
    const [refetch] = useCart();
    const  navigate = useNavigate();
    const location = useLocation();

     const handleAddtoCart = () => {
      // console.log(item);
      if(user && user.email){
        const cartItem = {menuItemId: _id, name, image, price, email: user.email }
        fetch('http://localhost:5000/carts',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data =>{
          // console.log(data);
          if(data.insertedId){
            refetch(); 
            Swal.fire({
              position:'top-end',
              icon:'successs',
              title:'Food added in the cart',
              showCancelButton:false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
        
          icon:'warning',
          title:'please login to order the food',
          showCancelButton:false,
          confirmButtonColor:'red',
          cancelButtonColor:'yello',
         confirmButtonText:'Login now'
        }).then((result)  =>{
          if(result.isConfirmed){
           navigate('/login', {state:{from:location}});
          }
        })
      }
     }
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img src={image} /></figure>
    <p className="text-white absolute right-0 mr-4 px-4 bg-slate-900 rounded-md">{price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleAddtoCart(item)} className="btn btn-outline border-0 bg-slate-200 border-orange-400 border-b-4 mt-4">Add to Card</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;