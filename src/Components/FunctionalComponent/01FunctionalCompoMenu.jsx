import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-ld-4 offset-md-6">
                    <ol>
                        <li> <Link to="functionalcompointro">Functional Components Intro</Link> </li>
                        <li> <Link to="functionalcompostate">State in Functional Components</Link> </li>
                        <li> <Link to="functionalcompoprops">Props in Functional Components</Link> </li>
                        <li> <Link to="functionalcompouseeffect">useEffect in Functional Components</Link> </li>
                        <li> <Link to="functionalcompouselayouteffect">useLayoutEffect in Functional Components</Link> </li>
                        <li> <Link to="functionalcompouseeffectuselayouteffect">useEffect vs useLayoutEffect in Functional Components</Link> </li>
                    </ol>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Outlet></Outlet>
                  </div>
            </div>
        </>
    );
};

export default FunctionalCompoMenu;