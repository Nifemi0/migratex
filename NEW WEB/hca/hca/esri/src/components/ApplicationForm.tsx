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

export function ApplicationForm() {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg-base flex flex-col lg:flex-row font-sans overflow-x-hidden">
      {/* Mobile/Tablet Header */}
      <div className="lg:hidden bg-white border-b border-border-subtle p-4 sticky top-0 z-40 shadow-sm w-full">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <img src="/esri-logo.png" alt="Esri" className="h-5 w-auto" />
            <span className="text-sm font-bold text-secondary uppercase tracking-tight">Esri Careers</span>
          </div>
          <div className="text-[10px] font-bold text-primary uppercase bg-primary/5 px-2 py-1 rounded">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
        <div className="w-full bg-bg-soft h-1 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(0,122,194,0.3)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Sidebar / Left Panel (Desktop only) */}
      <div className="hidden lg:flex lg:w-[360px] bg-white border-r border-border-subtle flex-col sticky top-0 h-screen z-10 shrink-0">
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div className="p-8 flex-1 flex flex-col overflow-y-auto">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <img src="/esri-logo.png" alt="Esri Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-display font-bold text-secondary tracking-tight">Esri</span>
            </div>
            <h1 className="text-secondary font-display font-semibold text-xs uppercase tracking-widest border-b border-border-subtle/50 pb-2">
              Global Talent Acquisition
            </h1>
            <p className="text-secondary-light text-[10px] mt-2 leading-relaxed uppercase font-bold tracking-tighter opacity-60">
              The Science of Where™ Personnel Portal
            </p>
          </div>

          <div className="flex-1 space-y-5">
            <div className="relative space-y-4">
              <div className="absolute left-[7px] top-2 bottom-6 w-px bg-border-subtle opacity-50"></div>
              {steps.map((step, idx) => {
                const isCompleted = idx < currentStep;
                const isCurrent = idx === currentStep;
                return (
                  <div key={idx} className={`relative z-10 flex items-center gap-3 transition-opacity duration-300 ${idx > currentStep ? 'opacity-40' : 'opacity-100'}`}>
                    <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-colors
                      ${isCompleted ? 'bg-primary border-primary text-white' :
                        isCurrent ? 'bg-white border-primary shadow-[0_0_0_2px_rgba(0,122,194,0.1)]' :
                          'bg-bg-soft border-border-subtle'
                      }
                    `}>
                      {isCompleted ? (
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        isCurrent && <div className="w-1.5 h-1.5 bg-primary rounded-sm animate-pulse" />
                      )}
                    </div>
                    <p className={`text-[11px] font-bold uppercase tracking-wider ${isCurrent ? 'text-primary' : 'text-secondary'}`}>
                      {step.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-border-subtle/50">
            <p className="text-[10px] text-secondary-light font-bold uppercase tracking-widest opacity-40">
              © {new Date().getFullYear()} Esri <br />
              Secure Candidate Portal
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-4xl px-4 py-8 lg:p-16">
          <div className="mb-6 lg:mb-10 flex items-center justify-between">
            {currentStep > 0 && currentStep < steps.length - 1 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-1 text-[10px] font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-widest group"
              >
                <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                Back
              </button>
            )}
            <div className="ml-auto text-[9px] font-black text-secondary-light/30 uppercase tracking-[0.2em] hidden sm:block">
              Secure Assessment: Protocol v4.2
            </div>
          </div>

          <div className="bg-white rounded-xl lg:rounded-2xl border border-border-subtle shadow-sm p-6 md:p-12 animate-fade-in-up">
            <CurrentStepComponent
              formData={formData}
              onNext={handleNext}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
