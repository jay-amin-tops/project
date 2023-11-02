import React from 'react';
import CustomCard from './05propChild.jsx';
import BikeImage from './bike.jpg';

const FunctionalComponentProps = () => {
    return (
        <div>
            <div className="row">
                {/* CustomCard("") */}
                {/* <div className="col-3"> <CustomCard kaipan="Data" image="https://mdbootstrap.com/img/new/standard/nature/184.webp" /> </div> */}
                <div className="col-3"> <CustomCard kaipan="Test" image={BikeImage} /> </div>
                <div className="col-3"> <CustomCard kaipan="Something" image="/BMWBike.jpg" /> </div>
                <div className="col-3">
                    {/* {`${process.env.PUBLIC_URL}/BMWBike.jpg`} */}
                    <CustomCard kaipan="Abc" image={`${process.env.PUBLIC_URL}/BMWBike.jpg`} /> </div>
                <div className="col-3"> <CustomCard image={BikeImage}  kaipan="Checking" /> </div>
            </div>

        </div>
    );
};

export default FunctionalComponentProps;