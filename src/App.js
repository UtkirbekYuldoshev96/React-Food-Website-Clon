import React from 'react';
import Header from "./Componets/Header/Header";
import Home from "./Componets/Home/Home";
import Speciality from "./Componets/Speciality/Speciality";

function App(props) {
    return (
        <div>
          <Header/>
          <Home/>
          <Speciality/>
        </div>
    );
}

export default App;