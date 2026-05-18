import React, { useState } from 'react';
import { ApplicationForm } from './components/ApplicationForm';
import { LandingPage } from './components/LandingPage';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return <LandingPage onStart={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-bg-soft selection:bg-primary/10">
      <ApplicationForm />
    </div>
  );
}