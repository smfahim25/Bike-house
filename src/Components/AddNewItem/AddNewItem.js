
import React, { useRef, useState } from 'react';
import './AddNewItem.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddNewItem = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    // using use ref hook to take input data
    const nameRef = useRef('');
    const emailRef = useRef('');
    // const soldRef = useRef('');
    const brandRef = useRef('');
    const priceRef = useRef('');
    const ratingsRef = useRef('');
    const quantityRef = useRef('');
    const urlRef = useRef('');
    const descriptionRef = useRef('');


    // taking user input function 
    const handleAddProduct = event => {

        event.preventDefault();
        const bikeData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            supplier: brandRef.current.value,
            price: priceRef.current.value,
            ratings: ratingsRef.current.value,
            quantity: quantityRef.current.value,
            // sold: soldRef.current.value,
            img: urlRef.current.value,
            description: descriptionRef.current.value
        }

        const url = `https://warm-sierra-80009.herokuapp.com/bikes`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bikeData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

                toast('Bike added successfully');
                window.location.reload();
            })


        // console.log(JSON.stringify(carData));
    };

    return (
        <div>
            <section className='add-items-form'>
                <form onSubmit={handleAddProduct}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                                <div className="row">
                                    <div className="col text-center title">
                                        <h1>ADD NEW BIKE</h1>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col mt-4">
                                        <input ref={nameRef} type="text" className="form-control" placeholder="Bike Name" required />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <input ref={emailRef} type="email" value={user?.email} className="form-control" placeholder="Email" required readOnly disabled />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <input ref={brandRef} type="text" className="form-control" placeholder="Brand/Supplier" required />
                                    </div>
                                </div>

                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <input ref={priceRef} type="number" className="form-control" placeholder="Price" required />
                                    </div>
                                    <div className="col">
                                        <input ref={ratingsRef} type="number" className="form-control" placeholder="Ratings" required />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <input ref={quantityRef} type="number" className="form-control" placeholder="Quantity" required />
                                    </div>
                                    {/* <div className="col">
                                        <input ref={soldRef} type="number" className="form-control" placeholder="Sold" required />
                                    </div> */}
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <input ref={urlRef} type="text" className="form-control" placeholder="photo url" required />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">

                                        <textarea ref={descriptionRef} name="" id="" cols="32" rows="5" className="form-control" placeholder='Enter full product description here' required></textarea>
                                    </div>
                                </div>
                                <div className="row justify-content-start mt-4">
                                    <div className="col text-center">


                                        <button className="btn add-btn mb-4">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddNewItem;