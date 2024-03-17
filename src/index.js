import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './WrapComponent';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WrapComponent />
  </React.StrictMode>
);
