//Transforms component into another component
//Adding additional functionalities to the existing components.

import React from "react";
import { Routes, Route } from "react-router-dom";

//Layouts
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({component: Component , ...rest }) => {
    //component
    //props -> path exact
    return (
        <>
        <Routes>
            <Route 
            {...rest}

            component = {(props) => (
                <DefaultLayout>
                    <Component {...props} />
                </DefaultLayout>
            )
            
            } 
            />
        </Routes>
        </>
    )
};

export default DefaultHOC;