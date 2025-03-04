import React from 'react';
import { BackgroundParticles } from './components/BackgroundParticles';
import Landingpage from './components/Landingpage';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <BackgroundParticles />
      <Landingpage />
    </div >
  );
}

export default App;
