import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-ld-4">
                        <ol>
                            <li> <Link to="whatiscomponent">What is Component in React </Link> </li>
                            <li> <Link to="classcompointro">Class Compo </Link> </li>
                            <li> <Link to="jsx">JSX </Link> </li>
                            <li> <Link to="event">Event</Link> </li>
                            <li> <Link to="state">State</Link> </li>
                            <li> <Link to="propsinclass">Props</Link> </li>
                            <li> <Link to="statelifecycle">State Life Cycle</Link> </li>
                            <li> <Link to="statelifecycleloader">State Life Cycle Loader</Link> </li>
                            <li> <Link to="classcompoconditionalrender">Class Compo Conditional Rendering</Link> </li>
                            <li> <Link to="classcompolistkey">Class Compo List Keys</Link> </li>
                            <li> <Link to="dynamicsubmenu">Dynamic Sub menu</Link> </li>
                            <li> <Link to="spreadvsres">Spread Vs Rest ...</Link> </li>
                            <li> <Link to="controlledcompo">Controlled Compo</Link> </li>
                            <li> <Link to="uncontrolledcompo">Uncontrolled Compo</Link> </li>
                            <li> <Link to="compositionvsinheritance">Composition Vs Inheritance</Link> </li>
                            <li> <Link to="statelifting">State Lifting</Link> </li>
                            <li> <Link to="hoc">HOC</Link> </li>
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
    }
}

export default ClassCompoMenu;
