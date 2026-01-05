import React, { use } from 'react';
import { Link } from 'react-router';

const LatestProducts = ({users}) => {
    const userData = use(users)

   
   
   
    console.log(userData)
    return (
        <div>
            {
                userData.map(u => <>
            {u._id}
            <Link to={`/productDescription/${u._id}`} className='btn'>
                Description</Link>
                <Link to={`/productbids/${u._id}`}>Show Bids</Link>
            <br></br>

            </>)
            }
            
        </div>
    );
};

export default LatestProducts;