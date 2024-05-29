
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoWalletSharp } from 'react-icons/io5';
import { NavLink, Outlet } from 'react-router-dom';
import useCarts from '../../Hooks/useCarts';

const Dashbord = () => {
    const [cart] = useCarts();
    return (
        <div className='flex mt-16'>
            {/* side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <div className='text-center p-4'>
                    <h2 className="font-bold text-xl">BISTRO BOSS</h2>
                    <h2 className="font-semibold  text-lg">RESTAURANI</h2>
                </div>

                <ul className='menu p-4'>

                    <li className='uppercase'>
                        <NavLink to='/dashbord/userHome '>
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li className='uppercase'>
                        <NavLink to='/dashbord/reservation '>
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li>
                    <li className='uppercase'>
                        <NavLink to='/dashbord/reservation '>
                            <IoWalletSharp />
                            Payment History</NavLink>
                    </li>
                    <li className='uppercase'>
                        <NavLink to='/dashbord/cart'>
                            <FaShoppingCart></FaShoppingCart>
                            My Cart:({cart.length})</NavLink>
                    </li>
                    <li className='uppercase'>
                        <NavLink to='/dashbord/review'>
                            <FaAd></FaAd>
                            Add Review</NavLink>
                    </li>
                    <li className='uppercase'>
                        <NavLink to='/dashbord/cart'>
                            <FaList></FaList>
                            My Bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li className='uppercase'>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li className=''>
                        <NavLink to='/order/salad'>
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>



                </ul>
            </div>
            {/* dashbord content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashbord;