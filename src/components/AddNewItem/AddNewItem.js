import React, { useRef } from 'react';
import './AddNewItem.css'

const AddNewItem = () => {

    // using use ref hook to take input data
    const nameRef = useRef('');
    const emailRef = useRef('');
    const soldRef = useRef('');
    const brandRef = useRef('');
    const priceRef = useRef('');
    const ratingsRef = useRef('');
    const quantityRef = useRef('');
    const urlRef = useRef('');
    const descriptionRef = useRef('');


    // taking user input function 
    const handleAddProduct = event => {

        event.preventDefault();
        const carData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            supplier: brandRef.current.value,
            price: priceRef.current.value,
            ratings: ratingsRef.current.value,
            quantity: quantityRef.current.value,
            sold: soldRef.current.value,
            img: urlRef.current.value,
            description: descriptionRef.current.value
        }

        const url = `http://localhost:5000/cars`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert("Successfully added");
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
                                        <h1>ADD NEW CAR</h1>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col mt-4">
                                        <input ref={nameRef} type="text" className="form-control" placeholder="Full Name" />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <input ref={emailRef} type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <input ref={brandRef} type="text" className="form-control" placeholder="Brand/Supplier" />
                                    </div>
                                </div>

                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <input ref={priceRef} type="number" className="form-control" placeholder="Price" />
                                    </div>
                                    <div className="col">
                                        <input ref={ratingsRef} type="number" className="form-control" placeholder="Ratings" />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <input ref={quantityRef} type="number" className="form-control" placeholder="Quantity" />
                                    </div>
                                    <div className="col">
                                        <input ref={soldRef} type="number" className="form-control" placeholder="Sold" />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <input ref={urlRef} type="text" className="form-control" placeholder="photo url" />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">

                                        <textarea ref={descriptionRef} name="" id="" cols="32" rows="5" className="form-control" placeholder='Enter full product description here'></textarea>
                                    </div>
                                </div>
                                <div className="row justify-content-start mt-4">
                                    <div className="col text-center">


                                        <button className="btn btn-primary mb-4">Submit</button>
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