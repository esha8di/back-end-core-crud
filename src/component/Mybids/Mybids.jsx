import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../context/Authcontext';

const Mybids = () => {
    const {user} = useContext(Authcontext)

    const [bidswithemail, setBidswithemail] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3000/bidproducts/${user?.email}`)
        .then(res => res.json())
        .then(data=>setBidswithemail(data))


    },[user?.email])
    return (
        <div>
            {
                bidswithemail.map(bid =><>
                <p>{bid.email}</p>
                <p>{bid.p_name}</p>
                </>)
            }
        </div>
    );
};

export default Mybids;