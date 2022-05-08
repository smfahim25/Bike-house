
import { useNavigate } from 'react-router-dom';
import Bike from '../Bike/Bike';
import useBikes from '../../hooks/useBikes';
import './Bikes.css';


const Bikes = () => {
    const navigate = useNavigate();
    const navigateToUpdate = () => {
        navigate(`/manage-inventory`);
    }

    const [bikes] = useBikes();
    return (
        <div className='cars'>
            <h4 className='text-center bikes-title'>Bikes</h4>
            <div className="car-container row">
                {
                    bikes?.map(bike => <Bike

                        key={bike._id}
                        bike={bike}
                    >

                    </Bike>
                    ).slice(0, 6)
                }
            </div>
            <button className='btn manage-button' onClick={navigateToUpdate}>Manage Inventories</button>

        </div>
    );
};

export default Bikes;