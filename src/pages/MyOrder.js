import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function MyOrder() {

    const [orderData, setOrderData] = useState({})

    useEffect(() => {
        const fetchMyOrder = async () => {
            const email = localStorage.getItem('userEmail');
            console.log('Fetching order data for:', email);

            const response = await fetch("http://localhost:5000/api/myOrderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            });

            const data = await response.json();
            console.log('Order data:', data);
            setOrderData(data.orderData || null); 
        };

        fetchMyOrder();
    }, []);

   

    return (
        <>
            <div>
                <Navbar />
            </div>


            <div className='container'>
                <div className='row'>
                    {orderData && orderData.order_data && orderData.order_data.length > 0 ? (
                        orderData.order_data.slice(0).reverse().map((orderGroup, index) => {
                            return (
                                <div key={index}>
                                    <div className='m-auto mt-5'>
                                        <h4>Order Date: {orderGroup[0]?.Order_date}</h4>
                                        <hr />
                                    </div>

                                    <div className='row'>
                                        {orderGroup.map((arrayData, idx) => {
                                            if (arrayData && arrayData.name && arrayData.qty && arrayData.size && arrayData.price) {
                                                return (
                                                    <div key={idx} className='col-12 col-md-6 col-lg-3'>
                                                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                            <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                            <div className="card-body">
                                                                <h5 className="card-title">{arrayData.name}</h5>
                                                                <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                    <span className='m-1'>Quantity: {arrayData.qty}</span>
                                                                    <span className='m-1'>Size: {arrayData.size}</span>
                                                                    <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                                        ₹{arrayData.price}/-
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            } else {
                                                return null;
                                            }
                                        })}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>No orders found</p>
                    )}
                </div>




            </div>


            <Footer />
        </>
    )
}

