import { Link } from "react-router-dom";
import SectionTitle from "../../SectionTitle/SectionTitle";
import useProduct from "../../Hooks/useProduct";
import useBooksProduct from "../../Hooks/useBooksProduct";
import useGadget from "../../Hooks/useGadget";

const HomeProduct = ({ category }) => {
  const [mensProduct] = useProduct();
  const [booksProduct] = useBooksProduct();
  const [gadgetProduct] = useGadget();

  // Get the correct products array based on the selected category
  const allProduct = (() => {
    switch (category) {
      case "mensProduct":
        return mensProduct.slice(0, 11);
      case "books":
        return booksProduct.slice(0, 11);
      case "gadgetProduct":
        return gadgetProduct.slice(0, 11);
      default:
        return mensProduct.slice(0, 11);
    }
  })();

  const getProductPath = (product) => {
    switch (category) {
      case "mensProduct":
        return `/d/${product._id}`;
   
      default:
        return `/details/${product._id}`

    }
  };

  return (
    <div>
      <SectionTitle heading="Your Favorite" subHeading="PRODUCT CATEGORY" />
      <div className="max-w-7xl mx-auto mb-8 px-4 md:px-10 grid grid-cols-2 md:grid-cols-3 gap-2">
        {allProduct.map((product) => (
          <div key={product._id} className="card md:w-80 shadow-2xl rounded-lg">
            <figure>
              <img
                src={product.photo}
                alt="unavailable"
                className="rounded-xl w-40 h-40 md:w-64 md:h-64"
              />
            </figure>
            <div className="card-body text-center items-center">
              <h2 className="text-[12px] font-bold">{product.name}</h2>
              <div className="flex gap-7">
                <p className="md:text-[15px] font-bold">Offer: ${product.discountedPrice}</p>
                <p className="md:text-[15px] font-bold">
                  Price: <del>${product.price}</del>
                </p>
              </div>
              <div className="card-actions">
                <div key={product._id} className="card">
                  <Link to={getProductPath(product)}>
                    <button className="btn">SELECT OPTION</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
