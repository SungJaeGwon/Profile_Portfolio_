import React from 'react';
import './css/main.scss';
import IntroduceComponent from './main/IntroduceComponent';
import AboutMe from './main/AboutMe';
import SkillsComponent from './main/SkillsComponent';

export default function MainComponent() {
  return (
    <main id="main">
      <IntroduceComponent />
      <AboutMe />
      <SkillsComponent />
    </main>
  );
}
