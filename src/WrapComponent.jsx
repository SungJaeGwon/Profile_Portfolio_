import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import { HashRouter, Routes, Route } from 'react-router-dom';

export default function WrapComponent() {
  return (
    <div id="wrap">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HeaderComponent />}>
            <Route path="/index" element={<MainComponent />} />
          </Route>
        </Routes>
        <FooterComponent />
      </HashRouter>
    </div>
  );
}
