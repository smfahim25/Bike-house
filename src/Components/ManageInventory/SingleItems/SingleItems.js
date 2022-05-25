import React from 'react';
import './SingleItems.css'
import deletIcon from '../../../images/deleteicon.png';
import editIcon from '../../../images/edit.png';
import { useNavigate } from 'react-router-dom';
import useBikes from '../../../hooks/useBikes';

const SingleItems = (props) => {

    const { _id, name, img, description, price, supplier, ratings, quantity, sold } = props.bike;

    // for edit icon 
    const navigate = useNavigate();
    const navigateToUpdate = id => {
        navigate(`/inventory/${id}`);
    }

    // delete icon 
    const [bikes, setBikes] = useBikes();
    const handleDelete = id => {
        const proceed = window.confirm(`Are you sure want to delete ${name}`);
        if (proceed) {
            const url = `hhttps://warm-sierra-80009.herokuapp.com/bikes/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    // const remaining = cars.filter(car=>car._id !== id);
                    // setCars(remaining);
                    // props.update.handleUpdate(_id);
                })
        }
    }
    return (
        <tr>
            <td className='mob-dev'><img className='car-icon' src={img} alt="" /></td>
            <td>{name}</td>
            <td className='mob-dev'>{supplier}</td>
            <td>{price}</td>

            <td>{quantity}</td>
            <td className='delet-icon'>
                <img onClick={() => navigateToUpdate(_id)} src={editIcon} alt="" />
            </td>
            <td className='delet-icon'>
                <img onClick={() => handleDelete(_id)} src={deletIcon} alt="" />
            </td>


        </tr>
    );
};

export default SingleItems;