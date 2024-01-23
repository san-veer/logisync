import Header from "../components/Header";

import React from "react";
import {Box, styled} from "@mui/material";
import {honeycombbg} from "../resources/data.js";

const BGComponent = styled(Box)`
    transform:translate(0px,-16px);
    background-image:url(${honeycombbg});
    min-height:100vh;
`

const Home = () => {
    return (
        <BGComponent>
            <div className="home-container">
            <p>Hello from Home</p>
            <Header />
            </div>
        </BGComponent>
    )

}

export default Home;