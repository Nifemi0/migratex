import React, { useState } from 'react';
import { IntroStep } from './IntroStep';
import { EligibilityStep } from './EligibilityStep';
import { ProfessionalStep } from './ProfessionalStep';
import { CompensationStep } from './CompensationStep';
import { ReviewStep } from './ReviewStep';
import { CongratulationsStep } from './CongratulationsStep';
import { ChevronLeft } from 'lucide-react';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  location: string;
  interviewCode: string;
  citizenship: string;
  hasGreenCard: string;
  hasFelon: string;
  drugFree: string;
  hasReference: string;
  referenceName: string;
  referencePhone: string;
  positionType: string;
  reasonForApplying: string;
  hasCurrentJob: string;
  canHandleDuties: string;
  strengths: string;
  weaknesses: string;
  professionalProfile: string;
  careerObjectives: string;
  understandsRemote: string;
  loyaltyLevel: string;
  desiredHourlyRate: string;
  paymentFrequency: string;
  bankName: string;
  hasCreditCard: string;
  creditCardIssuer: string;
  creditLimit: string;
  hasCreditDebt: string;
  phoneProvider: string;
  phoneType: string;
  additionalQuestions: string;
}

export function ApplicationForm({ onHome }: { onHome?: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
    interviewCode: '',
    citizenship: '',
    hasGreenCard: '',
    hasFelon: '',
    drugFree: '',
    hasReference: '',
    referenceName: '',
    referencePhone: '',
    positionType: '',
    reasonForApplying: '',
    hasCurrentJob: '',
    canHandleDuties: '',
    strengths: '',
    weaknesses: '',
    professionalProfile: '',
    careerObjectives: '',
    understandsRemote: '',
    loyaltyLevel: '',
    desiredHourlyRate: '',
    paymentFrequency: '',
    bankName: '',
    hasCreditCard: '',
    creditCardIssuer: '',
    creditLimit: '',
    hasCreditDebt: '',
    phoneProvider: '',
    phoneType: '',
    additionalQuestions: '',
  });

  const steps = [
    { title: 'Welcome', component: IntroStep },
    { title: 'Eligibility', component: EligibilityStep },
    { title: 'Professional Background', component: ProfessionalStep },
    { title: 'Compensation & Details', component: CompensationStep },
    { title: 'Review', component: ReviewStep },
    { title: 'Congratulations', component: CongratulationsStep },
  ];

  const progress = (currentStep / (steps.length - 1)) * 100;
  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="h-screen overflow-hidden bg-bg-base flex flex-col lg:flex-row font-sans">
      {/* Sidebar / Left Panel (Desktop only) */}
      <div className="hidden lg:flex lg:w-[380px] bg-white border-r border-border-subtle flex-col sticky top-0 h-screen z-10 shrink-0 shadow-2xl">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />
        <div className="p-10 flex-1 flex flex-col overflow-y-auto">
          {/* Header & Logo Section */}
          <div className="mb-12">
            <button onClick={onHome} className="flex items-center gap-4 mb-6 hover:opacity-80 transition-opacity text-left">
              <img src="/esri-logo.png" alt="Esri Logo" className="h-12 w-auto object-contain" />
            </button>
            <button onClick={onHome} className="text-[10px] font-bold text-primary flex items-center mb-6 hover:underline uppercase tracking-wider">
              <ChevronLeft className="w-3 h-3 mr-1" /> Return to Homepage
            </button>
            <h1 className="text-secondary font-display font-black text-[10px] uppercase tracking-[0.3em] border-b-2 border-primary w-fit pb-1 mb-4">
              Career Portal
            </h1>
            <p className="text-secondary-light text-[11px] leading-relaxed uppercase font-black tracking-tight opacity-80">
              The Science of Where™ <br />
              <span className="text-primary">Global Talent Acquisition</span>
            </p>
          </div>

          <div className="flex-1 space-y-5">
            <h3 className="section-header text-[10px]">Evaluation Protocol</h3>
            <div className="relative space-y-4">
              <div className="absolute left-[7px] top-2 bottom-6 w-px bg-border-subtle shadow-sm opacity-50 z-0"></div>
              {steps.map((step, idx) => {
                const isCompleted = idx < currentStep;
                const isCurrent = idx === currentStep;
                return (
                  <div key={idx} className={`relative z-10 flex items-center gap-3 transition-opacity duration-300 ${idx > currentStep ? 'opacity-50 grayscale' : 'opacity-100'}`}>
                    <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-colors
                      ${isCompleted ? 'bg-primary border-primary text-white' :
                        isCurrent ? 'bg-white border-primary shadow-[0_0_0_2px_rgba(0,122,194,0.1)]' :
                          'bg-bg-soft border-border-subtle'
                      }
                    `}>
                      {isCompleted && (
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {isCurrent && <div className="w-1.5 h-1.5 bg-primary rounded-sm animate-pulse" />}
                    </div>
                    <p className={`text-[11px] font-semibold tracking-wide ${isCurrent ? 'text-primary' : 'text-secondary'}`}>
                      {step.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border-subtle/50">
            <p className="text-[9px] text-secondary-light font-mono opacity-80 uppercase tracking-widest">
              © {new Date().getFullYear()} Esri <br />
              <span className="text-primary/70">The Science of Where</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area / Right Panel */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto relative bg-[#f8f9fa]">
        {/* Subtle GIS Background Decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] grayscale">
           <img 
             src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
             alt="" 
             className="w-full h-full object-cover"
           />
        </div>
        {/* Mobile Header (Tablets/Mobile only) */}
        <div className="lg:hidden bg-white border-b border-border-subtle p-4 sticky top-0 z-40 shadow-sm w-full">
          <div className="flex items-center justify-between mb-3">
            <button onClick={onHome} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="/esri-logo.png" alt="Esri" className="h-8 w-auto" />
              <span className="text-sm font-bold text-secondary uppercase tracking-tight">Careers</span>
            </button>
            <button onClick={onHome} className="text-[9px] font-bold text-primary bg-primary/5 px-2 py-1 rounded flex items-center hover:bg-primary/10 transition-colors">
              <ChevronLeft className="w-3 h-3 mr-0.5" /> Homepage
            </button>
          </div>

          <div className="w-full bg-bg-soft h-1 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-[10px] font-bold text-secondary uppercase tracking-tighter">
              {steps[currentStep].title}
            </p>
            {currentStep > 0 && currentStep < steps.length - 1 && (
              <button onClick={handleBack} className="text-[10px] font-bold text-primary uppercase flex items-center">
                <ChevronLeft className="w-3 h-3 mr-0.5" /> Back
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 p-5 lg:p-16 max-w-4xl mx-auto w-full">
          {/* Top Bar (Desktop only) */}
          <div className="hidden lg:flex h-10 mb-6 items-center">
            {currentStep > 0 && currentStep < steps.length - 1 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1.5 text-secondary-light hover:text-primary transition-colors text-xs font-medium group"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                Previous Step
              </button>
            )}
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-xl border border-border-subtle shadow-sm p-8 md:p-10 min-h-[500px] animate-fade-in-up">
            <CurrentStepComponent
              formData={formData}
              onNext={handleNext}
            />
          </div>

        </div>
      </div>
    </div>
  );
}