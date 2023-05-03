import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Header />
                <div className="min-h-[calc(100vh-137px)]">
                    <Outlet />
                </div>
            <Footer />
        </div>
    );
};

export default Main;