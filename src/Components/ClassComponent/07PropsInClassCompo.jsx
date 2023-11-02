import React, { Component } from 'react';
import CustomCard from './08propChild';
import BikeImage from './bike.jpg';

class PropsInClassCompo extends Component {

    render() {
        return (
            <>
                <div className="row">
                {/* CustomCard("") */}
                    <div className="col-3"> <CustomCard kaipan="Data" image = "https://mdbootstrap.com/img/new/standard/nature/184.webp"/> </div>
                    <div className="col-3"> <CustomCard kaipan="Test" image={BikeImage}/> </div>
                    <div className="col-3"> <CustomCard kaipan="Something" image="/BMWBike.jpg"/> </div>
                    <div className="col-3"> 
                    {`${process.env.PUBLIC_URL}/BMWBike.jpg`}
                    <CustomCard kaipan="Abc" image={`${process.env.PUBLIC_URL}/BMWBike.jpg`}/> </div>
                    <div className="col-3"> <CustomCard kaipan="Checking"/> </div>
                </div>
            </>
        );
    }
}

export default PropsInClassCompo;