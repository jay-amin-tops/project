import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const ExampleCompo = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h2 className='text-center'>Examples</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h4> <Link to="classcomponent">Class Components</Link> </h4>
                        {/* <ol>
                            <li><a href="">Introduction of Class Compo</a></li>
                        </ol> */}
                    </div>
                    <div className="col">
                    <h4> <Link to="functionalcomponent">Functional Components</Link> </h4>
                       
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ExampleCompo;