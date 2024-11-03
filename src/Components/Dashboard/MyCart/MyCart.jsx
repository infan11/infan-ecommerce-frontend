import React from 'react';
import useCart from '../../Hooks/useCart';

const MyCart = () => {
    const [cart] = useCart()
    return (
        <div>
            <p>{cart.length}</p>
        </div>
    );
};

export default MyCart;