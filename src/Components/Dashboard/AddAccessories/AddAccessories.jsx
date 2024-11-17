import { set, useForm } from "react-hook-form";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Input, Textarea } from "@material-tailwind/react";
import Select from "react-select";
import { useEffect, useState } from "react";
import { imageUpload } from "../../Hooks/imageHooks";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddAccessories = () => {
    const { register, handleSubmit, setValue } = useForm();
    const [productCategoryOptions, setProductCategoryOptions] = useState([]);
    const [localCategory, setLocalCategory] = useState(null);
    const [selectedProductCategory, setSelectedProductCategory] = useState(null);
    const [brandOption, setBrandOption] = useState([])
    const [selectedBrand, setSelectedBrand] = useState(null)
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        let options = [];
        if (localCategory?.value === "Accessories") {
            options = [
                { value: "Headphones_Earbuds", label: "Headphones & Earbuds" },
                { value: "Chargers_Adapters", label: "Chargers & Adapters" },
                { value: "Power_Banks", label: "Power Banks" },
                { value: "Phone_Cases_Covers", label: "Phone Cases & Covers" },
                { value: "Screen_Protectors", label: "Screen Protectors" },
                { value: "Wireless_Chargers", label: "Wireless Chargers" },
                { value: "Keyboards", label: "Keyboards" },
                { value: "Mice", label: "Mice" },
                { value: "Portable_Speakers", label: "Portable Speakers" },
                { value: "Smart_Glasses", label: "Smart Glasses" },
                { value: "USB_Hubs_Docks", label: "USB Hubs & Docking Stations" },
                { value: "External_Hard_Drives", label: "External Hard Drives" },
                { value: "Memory_Cards", label: "Memory Cards" },
                { value: "Stylus_Pens", label: "Stylus Pens" },
                { value: "Wearable_Tech", label: "Wearable Tech" },
                { value: "Laptop_Stands", label: "Laptop Stands" },
                { value: "Backpacks_Bags", label: "Backpacks & Bags" },
                { value: "Cable_Organizers", label: "Cable Organizers" },
                { value: "Camera_Accessories", label: "Camera Accessories" },
                { value: "Gaming_Controllers", label: "Gaming Controllers" },
            ];
        } else if (localCategory?.value === "Perfume") {
            options = [
                { value: "Eau_de_Parfum", label: "Eau de Parfum (EDP)" },
                { value: "Eau_de_Toilette", label: "Eau de Toilette (EDT)" },
                { value: "Eau_de_Cologne", label: "Eau de Cologne (EDC)" },
                { value: "Eau_Fraiche", label: "Eau Fraiche" },
                { value: "Perfume_Oil", label: "Perfume Oil" },
                { value: "Floral_Scents", label: "Floral Scents" },
                { value: "Woody_Scents", label: "Woody Scents" },
                { value: "Oriental_Scents", label: "Oriental Scents" },
                { value: "Fresh_Citrus_Scents", label: "Fresh or Citrus Scents" },
                { value: "Gourmand_Scents", label: "Gourmand Scents" },
                { value: "Chypre_Scents", label: "Chypre Scents" },
                { value: "Spicy_Scents", label: "Spicy Scents" },
                { value: "Aromatic_Scents", label: "Aromatic Scents" },
                { value: "Mens_Perfumes", label: "Men’s Perfumes" },
            ];
        } else if (localCategory?.value === "Mobiles") {
            options = [
                { value: "Flagship_Phones", label: "Flagship Phones" },
                { value: "Mid_Range_Phones", label: "Mid-Range Phones" },
                { value: "Budget_Phones", label: "Budget Phones" },
                { value: "Gaming_Phones", label: "Gaming Phones" },
                { value: "Foldable_Phones", label: "Foldable Phones" },
                { value: "FIVE_G_Phones", label: "FIVE_G_Phones" },
                { value: "Camera_Centric_Phones", label: "Camera-Centric Phones" },
                { value: "Battery_Centric_Phones", label: "Battery-Centric Phones" },
                { value: "Compact_Phones", label: "Compact Phones" },
                { value: "Rugged_Phones", label: "Rugged Phones" }
            ];
        } else if (localCategory?.value === "Laptop") {
            options = [
                { value: "Gaming_Laptops", label: "Gaming Laptops" },
                { value: "Business_Laptops", label: "Business Laptops" },
                { value: "Ultrabooks", label: "Ultrabooks" },
                { value: "TWO_in_ONE_Laptops", label: "TOW-in-ONE Laptops" },
                { value: "Chromebooks", label: "Chromebooks" },
                { value: "MacBooks", label: "MacBooks" },
                { value: "Student_Laptops", label: "Student Laptops" },
                { value: "Workstation_Laptops", label: "Workstation Laptops" },
                { value: "Budget_Laptops", label: "Budget Laptops" },
                { value: "High_Performance_Laptops", label: "High-Performance Laptops" },
            ];

        } else if (localCategory?.value === "Watch") {
            options = [
                { value: "Luxury_Watches", label: "Luxury Watches" },
                { value: "Smartwatches", label: "Smartwatches" },
                { value: "Analog_Watches", label: "Analog Watches" },
                { value: "Digital_Watches", label: "Digital Watches" },
                { value: "Hybrid_Watches", label: "Hybrid Watches" },
                { value: "Dress_Watches", label: "Dress Watches" },
                { value: "Field_Watches", label: "Field Watches" },
                { value: "Pilot_Watches", label: "Pilot Watches" },
                { value: "Diving_Watches", label: "Diving Watches" },
                { value: "Chronograph_Watches", label: "Chronograph Watches" },
                { value: "Sports_Watches", label: "Sports Watches" },
                { value: "Minimalist_Watches", label: "Minimalist Watches" },
                { value: "Mechanical_Watches", label: "Mechanical Watches" },
                { value: "Automatic_Watches", label: "Automatic Watches" },
                { value: "Quartz_Watches", label: "Quartz Watches" },
            ];
        }
        const brands = {
            Accessories: [
                { value: "Samsung", label: "Samsung" },
                { value: "Apple", label: "Apple" },
                { value: "OnePlus", label: "OnePlus" },
                { value: "Oppo", label: "Oppo" },
                { value: "Vivo", label: "Vivo" },
                { value: "Xiaomi", label: "Xiaomi" },
                { value: "Realme", label: "Realme" },
                { value: "Logitech", label: "Logitech" },
                { value: "Razer", label: "Razer" },
                { value: "Corsair", label: "Corsair" },

            ],
            Perfume: [
                { value: "Chanel", label: "Chanel" },
                { value: "Dior", label: "Dior" },
                { value: "Versace", label: "Versace" },
                { value: "Armani", label: "Armani" },
                { value: "Gucci", label: "Gucci" },
                { value: "Tom Ford", label: "Tom Ford" },
                { value: "Burberry", label: "Burberry" },
                { value: "Hugo Boss", label: "Hugo Boss" },
            ],
            Mobiles: [
                { value: "Samsung", label: "Samsung" },
                { value: "Apple", label: "Apple" },
                { value: "OnePlus", label: "OnePlus" },
                { value: "Oppo", label: "Oppo" },
                { value: "Vivo", label: "Vivo" },
                { value: "Xiaomi", label: "Xiaomi" },
                { value: "Realme", label: "Realme" },
                { value: "Google", label: "Google" },
                { value: "Nokia", label: "Nokia" },
                { value: "Sony", label: "Sony" },
                { value: "LG", label: "LG" },

            ],
            Laptop: [
                { value: "HP", label: "HP" },
                { value: "Dell", label: "Dell" },
                { value: "Lenovo", label: "Lenovo" },
                { value: "Asus", label: "Asus" },
                { value: "Acer", label: "Acer" },
                { value: "Apple", label: "Apple" },
                { value: "Microsoft", label: "Microsoft" },
                { value: "Razer", label: "Razer" },
                { value: "MSI", label: "MSI" },
                { value: "Samsung", label: "Samsung" },
                { value: "Toshiba", label: "Toshiba" },
                { value: "Alienware", label: "Alienware" }, ,

            ],
            Watch: [
                    { value: "Rolex", label: "Rolex" },
                    { value: "Omega", label: "Omega" },
                    { value: "Seiko", label: "Seiko" },
                    { value: "Casio", label: "Casio" },

            ]
        };
        setProductCategoryOptions(options);
        setSelectedProductCategory(null);
        setValue("product_category", null);
        setBrandOption(brands[localCategory?.value] || []); // explain
        setSelectedBrand(null)
        setValue("brands" , null)
        setLoading(false);
    }, [localCategory, setValue]);

    const handleCategoryChange = (selectedOption) => {
        setLocalCategory(selectedOption);
        setValue("category", selectedOption?.value || null);
    };

    const handleProductCategoryChange = (selectedOption) => {
        setSelectedProductCategory(selectedOption);
        setValue("product_category", selectedOption?.value || null);
    };
    const handleBrandChange =(selectedOption) => {
        setSelectedBrand(selectedOption)
        setValue("brands" , selectedOption?.value || null)
    }

    const onSubmit = async (data) => {
        // // console.log("form", data);
        const photo = data.photo?.[0];
        const imageData = await imageUpload(photo);

        const addItems = {
            name: data.name,
            category: localCategory?.value,
            product_category: data.product_category,
            brand: data.brands,
            description: data.description,
            price: parseFloat(data.price),
            discountedPrice: parseFloat(data.discountedPrice),
            photo: imageData?.data?.display_url || ""
        };
        // // console.log(addItems);
        axiosPublic.post("/addItems", addItems)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Successfully Added Item");
                }
                navigate("/accessories")
            })
            .catch(() => {
                toast.error("Failed to add item");
            });
    };

    return (
        <div className="max-w-7xl mx-auto mb-10 md:px-32">
              <Helmet>
                <meta charSet="utf-8" />
                <title>DASHOBARD | GADGET ITEM</title>
           
            </Helmet>
            <SectionTitle heading={"Your Favorite"} subHeading={"ADD ACCESORIES ITEMS"} />
            <div className="w-full rounded-md shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <br />
                    <div className="md:flex gap-3">
                        <Input type="text" size="lg" name="name" label="Name" {...register("name", { required: true })} />
                    </div>

                    <br />
                    <div className="md:flex gap-3">
                        <Select
                            placeholder="Select Category"
                            options={[
                                { value: "Accessories", label: "Accessories" },
                                { value: "Perfume", label: "Perfume" },
                                { value: "Mobiles", label: "Mobiles" },
                                { value: "Laptop", label: "Laptop" },
                                { value: "Watch", label: "Watch" },
                            ]}
                            value={localCategory}
                            onChange={handleCategoryChange}
                            isClearable
                        />
                        <br />
                        <Select
                            placeholder="Product Category"
                            options={productCategoryOptions}
                            value={selectedProductCategory}
                            onChange={handleProductCategoryChange}
                            isDisabled={loading || productCategoryOptions.length === 0}
                            isClearable
                        />
                    </div>
                    <br />
                    <div>
                        <Select
                            placeholder="Select Product Brand"
                           value={selectedBrand}
                            options={brandOption}
                            onChange={handleBrandChange}
                           
                            isDisabled={!selectedProductCategory}
                            isClearable
                        />
                      

                    </div>
                    <br />
                    <div className="md:flex gap-3">
                        <Input type="text" size="lg" name="price" label="Price" {...register("price", { required: true })} />
                        <br />
                        <Input type="text" name="discountedPrice" size="lg" label="Discounted Price" {...register("discountedPrice")} />
                    </div>

                    <input type="file" accept="image/*" name="photo" className="file-input file-input-ghost w-full border-4" {...register("photo")} />

                    <div>
                        <Textarea variant="standard" name="description" label="Description" {...register("description")} />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-orange-400 hover:bg-orange-400 text-white">ADD ITEMS</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAccessories;
