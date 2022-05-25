import React from 'react';
import { Table } from 'react-bootstrap';
import './ManageInventory.css'
import { useNavigate } from 'react-router-dom';
import './SingleItems/SingleItems.css';
import deletIcon from '../../images/deleteicon.png';
import editIcon from '../../images/edit.png';
import useBikes from '../../hooks/useBikes';




const ManageInventory = () => {
    const [bikes, setBikes] = useBikes();

    // for edit icon 
    const navigate = useNavigate();
    const navigateToUpdate = id => {
        navigate(`/inventory/${id}`);
    }

    const navigateToAddNew = () => {
        navigate(`/add-new`);
    }

    // delete icon 
    //  const [cars,setCars]=useCars();
    const handleDelete = id => {
        const proceed = window.confirm(`Are you sure want to delete.`);
        if (proceed) {
            const url = `https://warm-sierra-80009.herokuapp.com/bikes/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    window.location.reload();
                    const remaining = bikes.filter(bike => bike._id !== id);
                    setBikes(remaining);

                    //  update.handleUpdate(_id);
                })
        }

    }
    return (
        <div>
            <div className="text-center buttons">
                <button className='btn add-button'>Total Bikes : {bikes.length}</button>
                <button className='btn add-button' onClick={navigateToAddNew}>Add New</button>

            </div>
            <Table responsive className='container mb-5'>
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
                        <tr key={bike._id} className='bor'>
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
    );
};

export default ManageInventory;