import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUser, FaUtensils, FaWallet } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on data
    const [isAdmin] = useAdmin();


    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content">


                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/additem'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>  Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaBook></FaBook>  Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUser></FaUser> All Users</NavLink></li>
                          
                        </> : <>

                            <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservitions'><FaCalendar></FaCalendar>Reservitions</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>  Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge badge-secondary">+{cart?.length || 0}</span>
                            </NavLink>
                            </li>
                        </>
                    }



                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu </NavLink></li>
                    <li><NavLink to='/order/salad'> Order Food </NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;