
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUser = () => {
  const [axiosSecure] = useAxiosSecure();
    const {data: users = [], refetch} =  useQuery(['users'], async() =>{
        const res =  await axiosSecure.get('/users')
        return  res.data;
    })

    const handleMakeUser = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })


    }


const handleDelete = user => {
    console.log(user)
}
 
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
         <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3> 
         <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) =>  <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{ user.role === 'admin' ? 'admin' :
            <button onClick={() => handleMakeUser(user)} className="btn btn-ghost btn-xs text-white bg-orange-600"><FaUserShield></FaUserShield></button> }</td>
            <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-xs text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button>
          </tr> )
      }
     
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;