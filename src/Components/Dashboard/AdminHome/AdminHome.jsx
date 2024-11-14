import useCheckout from "../../Hooks/useCheckout";

const AdminHome = () => {
    const [checkOut] = useCheckout();

    return (
        <div>
        <p>    this is admin homfefee{checkOut?.CheckOutEmail}</p>
        </div>
    );
};

export default AdminHome;