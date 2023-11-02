import React, { Suspense, lazy} from 'react';
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./../Pages/main";
import About from "./../Pages/About";
import Contactus from "./../Pages/Contactus";
import HeaderCompo from "./../Components/HeaderFile";
import ExampleCompo from "./../Pages/ExampleCompo";


const FunctionalCompoRoute = React.lazy(()=> import('./FunctionalComponentRoute.jsx') )
const ClassCompoRoute = lazy(()=> { return import('./ClassComponentRoute.jsx')} )
const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <HeaderCompo />
                <MainPage />
            </>
        ),
    }, {
        path: "/about",
        element: (
            <>
                <HeaderCompo />
                <About />
            </>
        ),
    }, {
        path: "/contact",
        element: (
            <>
                <HeaderCompo />
                <Contactus />
            </>
        ),
    }, {
        path: "/examples",
        element: (
            <>
                <HeaderCompo />
                <ExampleCompo />
            </>
        ),
        children: [
            {
              path: "/examples/functionalcomponent/*",
              element: <Suspense fallback={<>Loading....</>} ><FunctionalCompoRoute/></Suspense>,
            }, {
              path: "/examples/classcomponent/*",
              element: <Suspense fallback={<>Loading....</>} ><ClassCompoRoute/></Suspense>,
            },
          ],
    },
])



// const MainRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <>
//                 {/* <HeaderCompo/> */}
//                 <MainPage />
//             </>
//         ),
//         children: [
//             {
//                 path: "about",
//                 element: <About />,
//             },
//             {
//                 path: "contact",
//                 element: <Contactus />,
//             },
//         ],
//     }
// ])

export default MainRouter;