import { FaTrashAlt } from "react-icons/fa";
import useCarts from "../../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectinTitile from "../../../Componentes/SectinTitile/SectinTitile";


const Cart = () => {
    const [cart, refetch] = useCarts();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDeleted = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div>
                <SectinTitile
                    subHeading="Hurry UP "
                    heading="MANAGE ALL ITEMS"
                ></SectinTitile>
            </div>
            <div className="">
                <h2 className="text-4xl font-semibold mb-2 underline">Total Items:{cart.length}</h2>
              
            </div>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="font-semibold ">
                            <th>Serial No
                            </th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Food Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>{index + 1} </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{item.name} </td>
                                <td>${item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDeleted(item._id)}
                                        className="btn btn-ghost btn-lg text-red-600">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;