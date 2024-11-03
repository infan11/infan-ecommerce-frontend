import { useForm } from "react-hook-form";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Input, Textarea } from "@material-tailwind/react";
import Select from "react-select";
import { useEffect, useState } from "react";
import { imageUpload } from "../../Hooks/imageHooks";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const AddItem = () => {
    const { register, handleSubmit, setValue, getValues } = useForm();
    const [productCategoryOptions, setProductCategoryOptions] = useState([]);
    const [localCategory, setLocalCategory] = useState(null);
    const [selectedProductCategory, setSelectedProductCategory] = useState(null); // Track selected product category
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        setLoading(true);
        let options = [];
        if (localCategory?.value === "Mens_Cloth") {
            options = [
                { value: "Casual_Shirts", label: "Casual Shirts" },
                { value: "Formal_Shirts", label: "Formal Shirts" },
                { value: "Polo_Shirts", label: "Polo Shirts" },
                { value: "T_Shirts", label: "T-Shirts" },
                { value: "Sweaters", label: "Sweaters" },
                { value: "Hoodies_and_Sweatshirts", label: "Hoodies and Sweatshirts" },
                { value: "Jackets_and_Coats", label: "Jackets and Coats" },
                { value: "Blazers_and_Suits", label: "Blazers and Suits" },
                { value: "Jeans", label: "Jeans" },
                { value: "Chinos", label: "Chinos" }
            ]; 
        } else if (localCategory?.value === "Book") {
            options = [
                { value: "Quran_and_Tafsir", label: "Quran and Tafsir" },
                { value: "Hadith", label: "Hadith" },
                { value: "Fiqh", label: "Fiqh (Islamic Jurisprudence)" },
                { value: "Aqidah", label: "Aqidah (Islamic Belief)" }
            ];
        } else if (localCategory?.value === "Mobiles") {
            options = [
                { value: "Apple", label: "Apple" },
                { value: "Samsung", label: "Samsung" },
                { value: "Oppo", label: "Oppo" }
            ];
        } else if (localCategory?.value === "Laptop") {
            options = [
                { value: "Apple", label: "Apple" },
                { value: "Lenovo", label: "Lenovo" },
                { value: "Hp", label: "Hp" }
            ];
        }

        setProductCategoryOptions(options);
        setSelectedProductCategory(null); 
        setValue("product_category", null);
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

    const onSubmit = async (data) => {
        console.log("form", data);
        const photo = data.photo?.[0];
        const imageData = await imageUpload(photo);

        const addItems = {
            name: data.name,
            category: localCategory?.value,
            product_category: data.product_category,
            description: data.description,
            price: parseFloat(data.price),
            discountedPrice: parseFloat(data.discountedPrice),
            photo: imageData?.data?.display_url || ""
        };
        console.log(addItems);
        axiosPublic.post("/addItems", addItems)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Successfully Added Item");
                }
            })
            .catch(() => {
                toast.error("Failed to add item");
            });
    };

    return (
        <div className="max-w-7xl mx-auto mb-10 md:px-32">
            <SectionTitle heading={"Your Favorite"} subHeading={"ADD ITEMS"} />
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
                                { value: "Mens_Cloth", label: "Mens Cloth" },
                                { value: "Book", label: "Book" },
                                { value: "Mobiles", label: "Mobiles" },
                                { value: "Laptop", label: "Laptop" }
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

export default AddItem;
