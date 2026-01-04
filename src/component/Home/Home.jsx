import React from 'react';
import LatestProducts from './LatestProducts';
 const users = fetch('http://localhost:3000/latestProducts').then(res=>res.json());
    console.log(users)

const Home = () => {
    return (
        <div>
            <LatestProducts users={users}></LatestProducts>
        </div>
    );
};

export default Home;