import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import SaveTheDate from './pages/SaveTheDate';
import Gallery from './pages/Gallery';
import Menu from './components/Menu';

export default function App() {
  return (
    <Background>
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  height: 100%;
  justify-content: center;
`;
