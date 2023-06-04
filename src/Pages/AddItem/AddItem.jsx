import { useForm } from "react-hook-form";
import SectionTitle from "../../components/Section/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const img_hosting_token  = import.meta.env.VITE_image_upload_token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const onSubmit = data => {

    const formData = new FormData();
    formData.append('image', data.image[0])

    fetch(img_hosting_url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgRespose => {
        if(imgRespose.success){
            const imgURL = imgRespose.data.display_url;
            const {name, price, category, recipe} = data;
            const newItem = {name, price:parseFloat(price), category, recipe, image:imgURL} 
            console.log(newItem);
            axiosSecure.post('/menu', newItem)
            .then(data => {
                console.log('after posting new menu item', data.data)
                if(data.data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })

     
    }

    return (
        <div className="w-full px-10 lg:mt-24">
            <SectionTitle subHeading="what's new" heading="Add an item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>

                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " 
                    {...register("name", {required: true, maxLength: 120})}/>

                </div>

               <div className="flex">
               <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Category</span>

                    </label>
                    <select defaultValue='Pick One' className="select select-bordered" {...register("category", { required: true })}>
                        <option disabled >Pick One</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Drinks</option>
                        <option>Desi</option>
                        <option>Dessert</option>
                    </select>

                </div>
                <div className="form-control w-full ml-4 ">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>

                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " {...register("price", { required: true })} />

                </div>
               </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>

                    </label>
                    <textarea  {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Item Img*</span>
                        
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full " {...register("image", { required: true })} />
                   
                </div>
                <input type="submit" className=" mt-4 btn btn-sm" value="Add Item" />
            </form>


        </div>
    );
};

export default AddItem;