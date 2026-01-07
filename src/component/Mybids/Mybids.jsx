import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../context/Authcontext';

const Mybids = () => {
    const {user} = useContext(Authcontext)

    const [bidswithemail, setBidswithemail] = useState([])
    const [token,setToken]  = useState('')

  
    
   useEffect(() => {
  if (!user?.email) return;

  const loadData = async () => {
    const token = await user.getIdToken(); // ✅ correct

    const res = await fetch(
      `http://localhost:3000/bidproducts/${user.email}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();
    setBidswithemail(data);
  };

  loadData();
}, [user]);

    return (
        <div>
            {
                bidswithemail.map(bid =><>
                <p>{bid.email}</p>
                <p>{bid.p_name}</p>
                <p>{bid.bid_price}</p>
                </>)
            }
        </div>
    );
};

export default Mybids;