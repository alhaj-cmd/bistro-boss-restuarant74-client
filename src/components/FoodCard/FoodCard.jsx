import { useContext } from "react";
import { AuthContext } from "../../providers/Authproviders";


const FoodCard = ({item}) => {
  // console.log(item);
    const {name, image, price, recipe}  = item;

    const {user} = useContext(AuthContext);

     const handleAddtoCart = item => {
      console.log(item);
      if(user){
        fetch('http://localhost:5000/carts')
        .then(res => res.json())
        .then(data =>{
          console.log(data);
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