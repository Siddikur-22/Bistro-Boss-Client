import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCarts from '../../../Hooks/useCarts';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCarts();



    const handleAddTocart = food => {
        if (user && user.email) {
            // send  cart item to the database
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added to your Cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You Are Not Logged In?",
                text: "Please Login to Add to the Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send to the login pages
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (

        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure><img src={image} alt="food" /></figure>
            <p className='absolute right-0 px-4 mr-4 mt-4 bg-slate-900 text-white '>{price}</p>
            <div className="card-body text-center">
                <h2 className="card-title mx-auto">Name:{name}</h2>
                <p>{recipe}</p>

                <div className="card-actions justify-center">
                    <button
                        onClick={() => handleAddTocart(item)}
                        className='uppercase btn btn-outline border-0 border-orange-400 border-b-4 mt-4'>Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;