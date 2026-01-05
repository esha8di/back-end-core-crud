import React from 'react';
import { useLoaderData } from 'react-router';

const Userdetails = () => {
    const user=useLoaderData();
    console.log("user",user)
    return (
        <div>
            this is user details.
        </div>
    );
};

export default Userdetails;