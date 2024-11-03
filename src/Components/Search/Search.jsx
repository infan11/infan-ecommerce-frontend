import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Search = () => {
    const axiosSecure = useAxiosSecure();
    const [data, setData] = useState([]); // Original data from the API
    const [filteredProducts, setFilteredProducts] = useState([]); // Products filtered by search

    // Fetch product data on component mount
    useEffect(() => {
        axiosSecure.get("/addItems")
            .then(res => {
                console.log(res.data); // Log the fetched data
                setData(res.data); // Set original data
                setFilteredProducts(res.data); // Initialize filtered products to all products
            })
            .catch(error => console.log(error));
    }, [axiosSecure]);

    // Filter function for the search bar
    const filter = (event) => {
        const query = event.target.value.toLowerCase(); // Get the search query
        // Filter the products based on the category or name
        const filtered = data.filter(product => 
            product.product_category.toLowerCase().includes(query) || // Filter by category
            product.name.toLowerCase().includes(query) // Filter by name
        );
        setFilteredProducts(filtered); // Update filtered products
    };

    return (
        <div className="max-w-7xl mx-auto px-10 min-h-screen mt-4">
            <div className="flex relative">
                <input 
                    onChange={filter}
                    type="text" 
                    placeholder="Search Your Item" 
                    className="w-full border-white border-2 p-3 px-14 font-bold rounded-full bg-transparent mb-8 fromDivNavD" 
                />
                <div className="absolute mt-4 text-xl flex items-center pl-4">
                    <IoSearch />
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-7 mt-5 min-h-screen">
                <div className="grid md:grid-cols-3 gap-5">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((productAdd) => (
                            <div key={productAdd._id} className="card card-compact w-80 mx-auto mt-1 cardA">
                                <figure>
                                    <img src={productAdd.photo} className="w-full h-60 fromDivNavM" alt={productAdd.name} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="font-extrabold text-2xl font-mono">{productAdd.name}</h2>
                                    <p className="text-xl font-bold">{productAdd.discountedPrice}</p>
                                    <p className="text-[16px]"><del>{productAdd.price}</del></p>
                                    <div className="card-actions">
                                        <Link className="btn fromDivNavM w-full rounded-full px-11 font-bold" to={`/details/${productAdd._id}`}>
                                            <button className="">Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="font-bold text-center mt-5">Unavailable Search Item</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
