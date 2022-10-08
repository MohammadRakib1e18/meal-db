import React, { useEffect } from 'react';

const Orders = () => {
    useEffect(()=>{
        document.title = "Home:Orders";
    },[])
    return (
        <div>
            <h1>Orders are being processed!</h1>
        </div>
    );
};

export default Orders;