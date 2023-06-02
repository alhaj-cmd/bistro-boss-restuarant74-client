import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useCart = () => {
const {user, loading} =  useAuth();

const [axiosSecure] = useAxiosSecure();

const {refetch, data: cart =[] } = useQuery({

    queryKey:['carts', user?.email],
 
    queryFn: async () =>{
       if(!loading && user?.email){
        const res = await axiosSecure(`/carts?email=${user?.email}`)
        
        return res.data;
       }
    },
    enabled: !loading && !!user?.email
})
return [cart, refetch]
    
}

export default useCart;