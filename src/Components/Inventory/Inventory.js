import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Loading from '../Loading/Loading';

import './Inventory.css';

const Inventory = () => {
    const { inventoryID } = useParams();


    const [loading, setLoading] = useState(false);

    // Loadinf single car by id 
    const [bikes, setBikes] = useInventory(inventoryID);
    // const [inventoryItem] = useInventory(inventoryID)

    const [quantity1, setQuantity] = useState(1);

    // useEffect(()=>{
    //     fetch(`https://secure-cliffs-70594.herokuapp.com/cars/${inventoryID}`)
    //     .then(res=>res.json())
    //     .then(data => setCars(data));
    // },[])

    const { name, img, description, price, supplier, ratings, quantity } = bikes;
    const preQuantity = quantity;
    // console.log(preQuantity);

    // Updating quantity
    const quantityRef = useRef('');
    const handleUpdateBikes = event => {
        event.preventDefault();
        const negative = quantityRef.current.value;
        // console.log(inputQuantity);
        const quantity = parseInt(quantityRef.current.value) + parseInt(preQuantity);
        // for fron end show 
        if (isNaN(quantity)) {
            alert("Please give valid value of restock.")
            return 0;
        }
        else if (negative < 0) {
            alert('Please give valid value of restock.')
            return 0;
        }
        else {
            bikes.quantity = parseInt(quantityRef.current.value) + parseInt(bikes.quantity);
            const updatedBikes = { quantity };

            // send data to the server
            setLoading(true);
            const url = `https://warm-sierra-80009.herokuapp.com/bikes/${inventoryID}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedBikes)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    alert('Restock successfully!!!');
                    // event.target.reset();
                    setLoading(false);


                })
        }

    }


    // updating delivered button 
    const handleDeliveredBikes = event => {
        event.preventDefault();
        const quantity = parseInt(preQuantity) - 1;
        bikes.quantity = bikes.quantity - 1;
        const newQuantity = bikes.quantity;
        setQuantity(newQuantity);
        console.log(quantity1);
        // console.log('getting sold: ',sold);

        const updatedBikes = { quantity };
        console.log(updatedBikes);

        // send data to the server
        setLoading(true);
        const url = `https://warm-sierra-80009.herokuapp.com/bikes/${inventoryID}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBikes)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Delivered successfully!!!');
                setLoading(false);
                // event.target.reset();

            })
    }




    return (
        <>
            {
                loading ? <Loading></Loading> : <div>

                    <div className="card-wrapper">
                        <div className="card">
                            {/* card left side or image side  */}
                            <div className="product-imgs">
                                <div className="img-display">
                                    <div className="img-showcase">

                                        <img src={img} alt="bike img" />

                                    </div>
                                </div>

                            </div>
                            {/* Card Right Side  */}
                            <div className="product-content">
                                <h2 className="product-title">{name}</h2>
                                <a href="#" className="product-link">{supplier}</a>
                                <div className="product-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span>{ratings}(21)</span>
                                </div>

                                <div className="product-price">

                                    <p className="quantity">Quantity: <span>{bikes.quantity}</span>  </p>
                                    {
                                        quantity1 <= 0 ? <p className='quantity'>Sold Out</p> : ''
                                    }
                                    <p className="new-price"> Price: <span> ${price}</span></p>

                                </div>

                                <div className="product-detail">
                                    <h2>About {name} </h2>
                                    <p>{description}</p>


                                </div>

                                <div className="purchase-info">
                                    <input type="positive-number" ref={quantityRef} placeholder='0' />
                                    <button type="button" onClick={handleUpdateBikes} className="product-button">Restock </button>
                                    <button type="button" onClick={handleDeliveredBikes} className="product-button">Delivered</button>
                                </div>

                                <div className="social-links">
                                    <p>Share At: </p>
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>


    );
};

export default Inventory;