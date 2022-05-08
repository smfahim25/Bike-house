import React from 'react';
import './SingleItems.css'
import deletIcon from '../../../images/deleteicon.png';
import editIcon from '../../../images/edit.png';
import { useNavigate } from 'react-router-dom';
import useCars from '../../../hooks/useCars';

const SingleItems = (props) => {
    
    const {_id,name,img,description,price,supplier,ratings,quantity,sold}=props.car;
    
    // for edit icon 
    const navigate = useNavigate();
    const navigateToUpdate = id =>{
        navigate(`/inventory/${id}`);
    }

    // delete icon 
    const [cars,setCars]=useCars();
    const handleDelete = id =>{
        const proceed = window.confirm( `Are you sure want to delete ${name}`);
        if(proceed){
            const url= `https://secure-cliffs-70594.herokuapp.com/cars/${id}`;
        fetch(url,{
            method: 'DELETE'
            
        })
        .then(res=>res.json())
        .then(result =>{
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
                    <td className='mob-dev'>{sold}</td>
                    <td className='delet-icon'> 
                    <img onClick={()=> navigateToUpdate(_id)}  src={editIcon} alt="" />
                    </td>
                    <td className='delet-icon'> 
                    <img onClick={()=> handleDelete(_id)} src={deletIcon} alt="" />
                    </td>

                   
        </tr>
    );
};

export default SingleItems;