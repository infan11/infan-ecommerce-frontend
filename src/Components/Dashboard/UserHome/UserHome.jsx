import React from 'react';
import useAuth from '../../Hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth();

    return (
        <div>
         <p> Name : {user?.displayName}</p>
        </div>
    );
};

export default UserHome;