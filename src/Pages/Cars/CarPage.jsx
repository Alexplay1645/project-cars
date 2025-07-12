import {Link, useLoaderData} from 'react-router-dom';

export default function CarPage(){
    const car = useLoaderData();
    return (
        <div className="Main car-page">
            <div>
                <Link to="/cars">Back</Link>
            </div>
            <img src={car.img} alt='avatar' />
            <h2>Model: {car.model}</h2>
            <h2>Color: {car.color}</h2>
            <h2>Price: {car.price}</h2>
            <h2>Manufacturer: {car.manufacturer}</h2>
        </div>
    );
}