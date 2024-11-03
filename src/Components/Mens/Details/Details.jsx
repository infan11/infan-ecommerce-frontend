import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCart";

const Details = ({ onSelect }) => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [selectSize, setSelectSize] = useState(null);
    const [quantity, setQuantity] = useState(0)
    const axiosSecure = useAxiosSecure();
    // const {register , handleSubmit} = useForm()
    const navigate = useNavigate();
    const { user } = useAuth(null)
    const [, refetch] = useCart();
    const sizes = ["M", "L", "XL", "XXL"];

    useEffect(() => {
        axiosSecure.get(`/addItems/${id}`)
            .then(res => {
                setItem(res.data);
            })
            .catch(error => console.error(error));
    }, [id, axiosSecure]);

    const handleSize = (size, event) => {
        event.preventDefault();
        setSelectSize(size);
        onSelect(size);
    };

    const handleIncrment = () => {
        if (quantity < 100) {
            setQuantity(prevQuantity => prevQuantity + 1)
        }
    }

    const handleDecrment = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    const handleAddToCart = ()=> {


        if (user && user?.email) {
            console.log(user.email);
            const cartItem = {
                name: item.name,
                photo: item.photo,
                discountedPrice: item.discountedPrice,
                price: item.price,
                size: selectSize,
                quantity: quantity,
                email : user?.email


            }
            toast.promise(
                axiosSecure.post('/cart', cartItem),
                {
                  loading: 'Loading...',
                  success: `${item.name} Successfully  Add Item`,
                  error: 'Could not save the user.'
                }
  
              )
          
              refetch();    
        }
        else{
            Swal.fire({
                title: "You are not logged yet",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, SignIn!"
              }).then((result) => {
                navigate('/login')
              });
        }

    }
    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 md:px-24 min-h-screen">
                <div className="mt-20 grid md:grid-cols-2 lg:flex-row-reverse">
                    <div className="text-center lg:text-right">
                        <img className="w-[500px] h-[500px] rounded-lg" src={item.photo} alt="" />
                    </div>

                    <div className="bg-base-100 w-full">
                        <p className="mt-4 md:mt-0 text-3xl md:text-4xl text-gray-700 font-bold uppercase">{item.name}</p>
                        <div className="divider w-14"></div>
                        <div className="flex gap-8 mb-4">
                            <p className="font-bold">${item.discountedPrice}.00</p>
                            <p className="font-bold"><del>${item.price}.00</del></p>
                        </div>

                        <div className="flex gap-5 mt-8">
                            {sizes.map(size => (
                                <Button
                                    key={size}
                                    onClick={(event) => handleSize(size, event)}
                                    name="size"
                                    required
                                    className={`px-4 py-2 border rounded ${selectSize === size ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
                                        } hover:bg-orange-400 hover:text-white transition shadow-md`}
                                >
                                    {size}
                                </Button>
                            ))}
                        </div>

                        {/* Quantity selector */}
                        <div className="flex items-center gap-2 mt-8">
                            <Button className="px-3 py-1 bg-orange-400 rounded hover:bg-gray-300 disabled:opacity-50" onClick={handleDecrment}>-</Button>
                            <input type="number" className="w-10 ml-4"
                                name="quantity"

                                value={quantity} onChange={(e) =>
                                    setQuantity(Math.max(1, Math.min(100, Number(e.target.value))))
                                } required />
                            <Button onClick={handleIncrment} className="px-3 py-1 bg-orange-400 rounded hover:bg-gray-300 disabled:opacity-50" disabled={quantity >= 100}>+</Button>
                        </div>
                        <Button onClick={handleAddToCart} className="bg-gray-600 mt-8 ">ADD TO CART</Button>

                        <div className="divider"></div>
                        <p className="uppercase mt-4 font-bold text-gray-500 text-2xl" > description</p>
                        <p className="mt-8 text-[12px] font-bold italic ">{item.description}</p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Details;
