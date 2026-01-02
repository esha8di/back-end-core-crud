import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        </>
    );
};

export default Root;