import React from 'react';
import { useLoaderData } from 'react-router';

const Productbids = () => {
    const product = useLoaderData();
    console.log(product)
    return (
        <div>
            this is bid.
            {
                product.map(p=><>
                {
                    p.p_name
                }
                </>)
            }
        </div>
    );
};

export default Productbids;