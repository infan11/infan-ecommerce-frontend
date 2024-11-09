import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useCart from "../../Hooks/useCart";

const BookDetails = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [quantity, setQuantity] = useState(1); // Default to 1 to avoid zero state
    const [existingItem, setExistingItem] = useState(false); // Tracks if item is in the cart

    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { user } = useAuth(null);
    const [, refetch] = useCart();

    // Fetch item details and check if item is already in the cart on load
    useEffect(() => {
        axiosSecure.get(`/addItems/${id}`)
            .then(res => {
                setItem(res.data);
            })
            .catch(error => console.error(error));

        if (user && user.email) {
            axiosSecure.get(`/cart?email=${user.email}`)
                .then(res => {
                    const itemInCart = res.data.some(cartEntry => cartEntry.name === item.name);
                    setExistingItem(itemInCart);
                })
                .catch(error => console.error("Error checking cart:", error));
        }
    }, [id, axiosSecure, user, item.name]);

    const handleIncrement = () => {
        if (quantity < 100) setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
    };

    const handleAddToCart = () => {
        if (user && user.email) {
            if (existingItem) {
                toast.error(`${item.name} is already in your cart.`);
                return;
            }
            const cartItem = {
                name: item.name,
                photo: item.photo,
                discountedPrice: item.discountedPrice,
                price: item.price,
                writerName: item.writerName,
                product_category: item.product_category,
                quantity,
                email: user.email,
            };

            axiosSecure.post('/cart', cartItem)
                .then(() => {
                    toast.success(`${item.name} successfully added to cart.`);
                    setExistingItem(true); // Update state to show "Check Your Cart" button
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
                        <img className="w-[300px] mx-auto h-[400px] rounded-lg" src={item.photo} alt="" />
                    </div>

                    <div className="bg-base-100 w-full px-3 md:px-1">
                        <p className="mt-4 md:mt-0 text-3xl md:text-4xl text-gray-700 font-bold uppercase">{item.name}</p>
                        <p className="font-bold mt-3 text-gray-800 italic">Writer: {item.writerName}</p>
                        <p className="font-bold mt-3 text-gray-800 italic">Publication: {item.productPublication}</p>
                        <div className="flex gap-7">
                            <p className="font-extrabold text-gray-700 mt-3">Cover: {item.cover}</p>
                            <p className="font-extrabold text-gray-700 mt-3">Page: {item.pageNumber}</p>
                        </div>
                        {existingItem ? (
                            <p className="font-bold text-gray-500">Your Selected Quantity: {quantity}</p>
                        ) : (
                            <div className="flex items-center gap-2 mt-8">
                                <Button className="px-3 py-1 bg-orange-400 rounded hover:bg-gray-300 disabled:opacity-50" onClick={handleDecrement}>-</Button>
                                <input type="number" className="w-10 ml-4" name="quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, Math.min(100, Number(e.target.value))))}
                                    required
                                />
                                <Button onClick={handleIncrement} className="px-3 py-1 bg-orange-400 rounded hover:bg-gray-300 disabled:opacity-50" disabled={quantity >= 100}>+</Button>
                            </div>
                        )}
                        <div className="divider w-14"></div>
                        <div className="flex gap-8 mb-4">
                            <p className="font-bold">${item.discountedPrice}.00</p>
                            <p className="font-bold"><del>${item.price}.00</del></p>
                        </div>

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

export default BookDetails;
