import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import styled from 'styled-components';
import { lavendar, mint } from './styles/colors';
import HomePage from './pages/HomePage';
import SaveTheDate from './pages/SaveTheDate';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <Background className="App">
        <header className="App-header"></header>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mawwiage" element={<HomePage />} />
                <Route path="/save-the-date" element={<SaveTheDate />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    </Background>
  );
}

const Background = styled.div`
  align-items: center;
  background-color: ${mint};
  color: ${lavendar};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  height: 100%;
  justify-content: center;
  min-height: 100vh;
`;
