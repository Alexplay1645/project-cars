import {Link} from 'react-router-dom';

export default function Cars(){
    return (
        <div className="Main">
            <h1>CARS</h1>
            <ul>
                <li><Link to='/cars/shevrollet'>2017 Chevrolet Camaro 1SS Coupe RWD</Link></li>
                <li><Link to='/cars/BMW'>2018 BMW X5</Link></li>
                <li><Link to='/cars/Toyota'>2025 Toyota Camry SE FWD</Link></li>
                <li><Link to='/cars/Ford'>New 2025 Ford Mustang Premium</Link></li>
                <li><Link to='/cars/Audi'>2023 Audi A6 Premium 45 TFSI quattro</Link></li>
            </ul>
        </div>
    );
}