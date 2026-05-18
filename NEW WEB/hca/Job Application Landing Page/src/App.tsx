import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { ApplicationForm } from './components/ApplicationForm';
import { SubPage, ViewType } from './components/SubPage';

function App() {
  const [view, setView] = useState<ViewType>('home');

  return (
    <div className="min-h-screen bg-bg-base">
      {view === 'home' && (
        <LandingPage 
          onStart={() => setView('form')} 
          onNavigate={(target: ViewType) => setView(target)} 
        />
      )}
      
      {view === 'form' && (
        <ApplicationForm onHome={() => setView('home')} />
      )}

      {(view === 'products' || view === 'industries' || view === 'about') && (
        <SubPage 
          view={view} 
          onBack={() => setView('home')} 
          onStart={() => setView('form')} 
        />
      )}
    </div>
  );
}

export default App;