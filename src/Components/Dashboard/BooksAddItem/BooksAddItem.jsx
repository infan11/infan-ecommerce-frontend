import { useForm } from "react-hook-form";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Input, Textarea } from "@material-tailwind/react";
import Select from "react-select";
import { useEffect, useState } from "react";
import { imageUpload } from "../../Hooks/imageHooks";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const BooksAddItem = () => {
    const { register, handleSubmit, setValue, getValues } = useForm();
    const [productCategoryOptions, setProductCategoryOptions] = useState([]);
    const [localCategory, setLocalCategory] = useState(null);
    const [selectedProductCategory, setSelectedProductCategory] = useState(null); // Track selected product category
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        let options = [];

        if (localCategory?.value === "Book") {
            options = [
                { value: "Quran_and_Tafsir", label: "Quran and Tafsir" },
                { value: "Biography_of_Prophet", label: "Biography_of_Prophet" },
                { value: "Hadith", label: "Hadith" },
                { value: "Fiqh", label: "Fiqh (Islamic Jurisprudence)" },
                { value: "Aqidah Aqidah (Islamic Belief)", label: "Aqidah (Islamic Belief)" }
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
        // // console.log("form", data);
        const photo = data.photo?.[0];
        const imageData = await imageUpload(photo);

        const addItems = {
            name: data.name,
            writerName: data.writerName,
            pageNumber: data.pageNumber,
            cover: data.cover,
            productPublication: data.productPublication,
            category: localCategory?.value,
            product_category: data.product_category,
            description: data.description,
            price: parseFloat(data.price),
            discountedPrice: parseFloat(data.discountedPrice),
            photo: imageData?.data?.display_url || ""
        };
        // // console.log(addItems);
        axiosPublic.post("/addItems", addItems)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Successfully Added Book Item");
                }
                navigate("/books")
            })
            .catch(() => {
                toast.error("Failed to add item");
            });
    };

    return (
        <div className="max-w-7xl mx-auto mb-10 md:px-32">
            <Helmet>
                <meta charSet="utf-8" />
                <title>DASHOBARD | ADD BOOKS</title>
           
            </Helmet>
            <SectionTitle heading={"Your Favorite"} subHeading={"ADD BOOKS ITEMS"} />
            <div className="w-full rounded-md shadow-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <br />
                    <div className="md:flex gap-3">
                        <Input type="text" size="lg" name="name" label="Books Name" {...register("name", { required: true })} />
                    </div>
                    <br />
                    <div className="md:flex gap-3">
                        <Input type="text" size="lg" name="writerName" label="Writer  Name" {...register("writerName", { required: true })} />
                    </div>
                    <br />
                    <div className="md:flex gap-3">
                        <Input type="number" size="lg" name="pageNumber" label="Page Number" {...register("pageNumber", { required: true })} />
                    </div>
                    <br />

                    <select className="select select-bordered "
                        {...register("cover", { required: true })}
                        name="cover"
                    >
                        <option disabled selected>Cover</option>
                        <option>Hard</option>
                        <option>Peper</option>

                    </select>
                    <select className="select select-bordered "
                        {...register("productPublication", { required: true })}
                        name="productPublication"
                    >
                        <option disabled selected>Product Publication</option>
                        <option>Islamic Foundation Bangladesh</option>
                        <option>Darussalam Bangladesh</option>
                        <option>Khorshed Publications</option>
                        <option>Siyam Publications</option>
                        <option>Ar-Ruhama Publications</option>
                        <option>Seerat Publications</option>
                        <option>Guardian Publications</option>
                        <option>Somokalin Prokasoni</option>
                        <option>Umed Prokasoni</option>



                    </select>


                    <br />

                    <div className="md:flex gap-3">
                        <Select
                            placeholder="Select Category"
                            options={[

                                { value: "Book", label: "Book" },

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
                        <br />
                       
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

export default BooksAddItem;
