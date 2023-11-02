import React, { Component } from 'react';

class PropExampleCard extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <img className="card-img-top" src={this.props.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.kaipan}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        );
    }
}

export default PropExampleCard;