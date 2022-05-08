import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';


import { Table } from 'react-bootstrap';
import deletIcon from '../../images/deleteicon.png';
import editIcon from '../../images/edit.png';
const MyItem = () => {
    const [user] = useAuthState(auth);
    const [bikes, setBikes] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getMycar = async () => {
            const email = user.email;
            const url = `http://localhost:5000/mybike?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setBikes(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getMycar();

    }, [user])

    // for edit icon 

    const navigateToUpdate = id => {
        navigate(`/inventory/${id}`);
    }

    // delete icon 
    //  const [cars,setCars]=useCars();
    const handleDelete = id => {
        const proceed = window.confirm(`Are you sure want to delete`);
        if (proceed) {
            const url = `http://localhost:5000/bikes/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remaining = bikes.filter(bike => bike._id !== id);
                    setBikes(remaining);
                    //  update.handleUpdate(_id);
                })
        }
    }

    return (
        <div>
            {
                bikes.length == 0 ? <h2>You have not added any bike</h2> : <div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th className='mob-dev'>Image</th>
                                <th>Name</th>
                                <th className='mob-dev'>Brand</th>
                                <th>price</th>
                                <th>Quantity</th>
                                <th>Edit</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>

                            {bikes?.map(bike =>
                                <tr key={bike._id}>
                                    <td className='mob-dev'><img className='car-icon' src={bike.img} alt="" /></td>
                                    <td>{bike.name}</td>
                                    <td className='mob-dev'>{bike.supplier}</td>
                                    <td>{bike.price}</td>

                                    <td>{bike.quantity}</td>
                                    <td className='delet-icon'>
                                        <img onClick={() => navigateToUpdate(bike._id)} src={editIcon} alt="" />
                                    </td>
                                    <td className='delet-icon'>
                                        <img onClick={() => handleDelete(bike._id)} src={deletIcon} alt="" />
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </Table>
                </div>
            }


        </div>
    );
};

export default MyItem;