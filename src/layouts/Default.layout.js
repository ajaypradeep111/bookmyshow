import React from "react";
//components
import Navbar from "../components/Navbar/navbar.component";
import Temp from "../components/temp";
const DefaultLayout = (props) => {
    return (
        <>
        {props.children}
        <Temp />
        </>
    );
};

export default DefaultLayout;