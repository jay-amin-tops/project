import React from 'react';
import { useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from './../Components/FunctionalComponent/01FunctionalCompoMenu.jsx';
import FunctionalComponentIntro from './../Components/FunctionalComponent/02fucntionalcompointro.jsx';
import FunctionalComponentState from './../Components/FunctionalComponent/03FunctionalComponentState.jsx';
import FunctionalComponentProps from './../Components/FunctionalComponent/04FunctionalComponentProps.jsx';
import FunctionalComponentUseEffect from './../Components/FunctionalComponent/05FunctionalComponentUseEffect.jsx';
import FunctionalComponentUseLayoutEffect from './../Components/FunctionalComponent/06FunctionalComponentUseLayoutEffect.jsx';
import FunctionalComponentUseEffectUseLayoutEffect from './../Components/FunctionalComponent/07FunctionalComponentUseEffectUseLayoutEffect.jsx';

const FunctionalComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu />,
            children: [
                {
                    path: "functionalcompointro",
                    element: <FunctionalComponentIntro />,
                },{
                    path: "fucntionalhooks",
                    element: <FunctionalComponentIntro />,
                },{
                    path: "functionalcompostate",
                    element: <FunctionalComponentState />,
                },{
                    path: "functionalcompoprops",
                    element: <FunctionalComponentProps />,
                },{
                    path: "functionalcompouseeffect",
                    element: <FunctionalComponentUseEffect />,
                },{
                    path: "functionalcompouselayouteffect",
                    element: <FunctionalComponentUseLayoutEffect />,
                },{
                    path: "functionalcompouseeffectuselayouteffect",
                    element: <FunctionalComponentUseEffectUseLayoutEffect />,
                },
            ]
        }
    ])
    return routes;
}
export default FunctionalComponentRoute;