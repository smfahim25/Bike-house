import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';



import './Inventory.css';

const Inventory = () => {
    const { inventoryID } = useParams();
    // Loadinf single car by id 
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${inventoryID}`)
            .then(res => res.json())
            .then(data => setBikes(data));
    }, [inventoryID])

    const { name, img, description, price, supplier, ratings, quantity, sold } = bikes;
    console.log(quantity)

    // Updating quantity
    const quantityRef = useRef('');
    const handleUpdateCars = event => {
        event.preventDefault();
        const quantity = quantityRef.current.value;
        console.log('getting quantity: ', quantity);
        const updatedCars = { quantity };

        // send data to the server
        const url = `htttp://localhost:5000/cars/${inventoryID}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCars)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('users added successfully!!!');
                // event.target.reset();
            })
    }





    return (
        <div>

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
                            <span>{ratings}(5)</span>
                        </div>

                        <div className="product-price">
                            <p className="quantity">Quantity: <span>{quantity}</span>  Sold: <span>{sold}</span></p>
                            <p className="new-price"> Price: <span> ${price}</span></p>
                        </div>

                        <div className="product-detail">
                            <h2>About {name} </h2>
                            <p>{description}</p>


                        </div>

                        <div className="purchase-info">
                            <input type="number" ref={quantityRef} placeholder='0' />
                            <button type="button" onClick={handleUpdateCars} className="product-button">Restock </button>
                            <button type="button" className="product-button">Delivered</button>
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
    );
};

export default Inventory;