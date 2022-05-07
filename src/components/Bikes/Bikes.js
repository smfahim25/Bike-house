import useBikes from '../../hooks/useBikes';
import Bike from '../Bike/Bike';
import './Bikes.css';


const Bikes = () => {

    const [bikes] = useBikes();
    return (
        <div className='cars'>
            <h4 className='text-center brand'>Bikes</h4>
            <div className="car-container row">
                {
                    bikes?.map(car => <Bike

                        key={car._id}
                        car={car}
                    >

                    </Bike>
                    ).slice(0, 6)
                }
            </div>

        </div>
    );
};

export default Bikes;