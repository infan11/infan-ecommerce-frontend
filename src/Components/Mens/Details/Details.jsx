import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCart";

const Details = ({ onSelect }) => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [selectSize, setSelectSize] = useState(null);
    const [quantity, setQuantity] = useState(1); // Set default quantity to 1
    const [existingItem, setExistingItem] = useState(false); // Track if item is in the cart

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { user } = useAuth(null);
    const [, refetch] = useCart();
    const sizes = ["M", "L", "XL", "XXL"];

    useEffect(() => {
        // Fetch item details
        axiosSecure.get(`/addItems/${id}`)
            .then(res => {
                setItem(res.data);
            })
            .catch(error => console.error(error));

        // Check if the item already exists in the cart
        if (user && user.email) {
            axiosSecure.get(`/cart?email=${user.email}`)
                .then(res => {
                    const isInCart = res.data.some(cartItem => cartItem.name === item.name && cartItem.size === selectSize);
                    setExistingItem(isInCart);
                })
                .catch(error => console.error("Error checking cart:", error));
        }
    }, [id, axiosSecure, user, item.name, selectSize]);

    const handleSize = (size, event) => {
        event.preventDefault();
        setSelectSize(size);
        onSelect(size);
    };

    const handleIncrement = () => {
        if (quantity < 100) setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
    };

    const handleAddToCart = () => {
        if (user && user?.email) {
            if (existingItem) {
                toast.error(`${item.name} is already in your cart with the selected size.`);
                return;
            }

            const cartItem = {
                name: item.name,
                photo: item.photo,
                discountedPrice: item.discountedPrice,
                price: item.price,
                size: selectSize,
                quantity,
                email: user?.email,
            };

            axiosSecure.post('/cart', cartItem)
                .then(() => {
                    toast.success(`${item.name} successfully added to cart.`);
                    setExistingItem(true);
                    refetch();
                })
                .catch(() => toast.error('Could not add the item to the cart.'));
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please log in to add items to your cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now",
            }).then(result => {
                if (result.isConfirmed) navigate('/login');
            });
        }
    };

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

                        {existingItem ? (
                            <p className="font-bold text-gray-500">Selected Size: {selectSize}</p>
                        ) : (
                            <div className="flex gap-5 mt-8">
                                {sizes.map(size => (
                                    <Button
                                        key={size}
                                        onClick={(event) => handleSize(size, event)}
                                        className={`px-4 py-2 border rounded ${selectSize === size ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-orange-400 hover:text-white transition shadow-md`}
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        )}

                        {existingItem ? (
                            <p className="font-bold text-gray-500">Selected Quantity: {quantity}</p>
                        ) : (
                            <div className="flex items-center gap-2 mt-8">
                                <Button className="px-3 py-1 bg-orange-400 rounded hover:bg-gray-300 disabled:opacity-50" onClick={handleDecrement}>-</Button>
                                <input type="number" className="w-10 ml-4"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, Math.min(100, Number(e.target.value))))}
                                    required
                                />
                                <Button onClick={handleIncrement} className="px-3 py-1 bg-orange-400 rounded hover:bg-gray-300 disabled:opacity-50" disabled={quantity >= 100}>+</Button>
                            </div>
                        )}

                        {existingItem ? (
                            <Link to="/dashboard/myCart">
                                <Button className="bg-gray-600 mt-8">Check Your Cart</Button>
                            </Link>
                        ) : (
                            <Button onClick={handleAddToCart} className="bg-gray-600 mt-8">ADD TO CART</Button>
                        )}

                        <div className="divider"></div>
                        <p className="uppercase mt-4 font-bold text-gray-500 text-2xl">Description</p>
                        <p className="mt-8 text-[12px] font-bold italic">{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
