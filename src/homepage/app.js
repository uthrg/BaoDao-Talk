import React from 'react';
import ReactDOM from 'react-dom';
import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto";
import Section1 from "./Section1.js";
import Section2 from "./Section2.js";
import Section3 from "./Section3.js";
import Section4 from "./Section4.js";
import Section5 from "./Section5.js";
import Section6 from "./Section6.js";
import Footer from "./Footer.js";

const App = () => {
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
        </div>
    )
}

export default App;