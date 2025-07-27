import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import styled from 'styled-components';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import SaveTheDate from './pages/SaveTheDate';
import Gallery from './pages/Gallery';
import RSVP from './pages/RSVP';
import Info from './pages/Info';

export default function App() {
  return (
    <Background>
        <BrowserRouter>
            <Menu />
            {createRoutes()}
        </BrowserRouter>
    </Background>
  );
}

var routeMap = {
  "/home" : <HomePage />,
  "/save-the-date" : <SaveTheDate />,
  "/gallery" : <Gallery />,
  "/rsvp" : <RSVP />,
  "/info" : <Info />
}

function createRoutes() {
  var routes = [];
  for (const [key, value] of Object.entries(routeMap)) {
    var upperCaseRoute = <Route path={key.toLocaleUpperCase()} element={value} />;
    var lowerCaseRoute = <Route path={key.toLocaleLowerCase()} element={value} />;
    routes.push(upperCaseRoute);
    routes.push(lowerCaseRoute);
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />;
      <Route path="/mawwiage" element={<HomePage />} />;
      {routes}
    </Routes>
  );
}

const Background = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  height: 100%;
  justify-content: center;
`;
