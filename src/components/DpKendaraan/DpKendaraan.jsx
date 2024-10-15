import { useState, useEffect } from 'react';
import './DpKendaraan.css';
import vehiclesData from './daihatsuVehicles.json';

const DaihatsuCardGrid = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        setVehicles(vehiclesData.vehicles);
    }, []);

    return (
        <div className="card-grid">
            {vehicles.map((vehicle, index) => (
                <div key={index} className="card-dp" style={{ backgroundColor: vehicle.color }}>
                    <h3>{vehicle.name}</h3>
                    <p>Kredit Mulai dari</p>
                    <h2>Rp{vehicle.dp} / bln</h2>
                    <p>Total Uang Muka</p>
                    <div className="specs">
                        <span>Rp{vehicle.total_um}</span>
                    </div>
                    <div className="tenor">
                        <span>Tenor {vehicle.tenor} bulan</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DaihatsuCardGrid;