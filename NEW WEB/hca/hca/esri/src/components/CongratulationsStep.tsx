import React from 'react';
import { FormData } from './ApplicationForm';
import { CheckCircle2, ShieldCheck, FileText, Briefcase, Award, Clock } from 'lucide-react';

interface CongratulationsStepProps {
  formData: FormData;
}

export function CongratulationsStep({ formData }: CongratulationsStepProps) {
  const benefits = [
    "Comprehensive Health Coverage",
    "Retirement Savings Plan (401k)",
    "Professional Development",
    "Flexible Work Arrangements",
    "Wellness & Family Programs",
    "Paid Time Off & Holidays",
  ];

  const authCode = `ESRI-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
  const timestamp = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-8 animate-fade-in text-center">

      {/* Header Status */}
      <div className="flex flex-col items-center justify-center space-y-4 py-8">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
          <Clock className="w-16 h-16 text-primary relative z-10" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-bold text-primary tracking-tight">
            Application Submitted Successfully
          </h2>
          <p className="text-sm font-medium text-primary uppercase tracking-widest">
            Your application is under review
          </p>
        </div>
      </div>

      {/* Main Status Panel */}
      <div className="dashboard-panel p-6 md:p-8 max-w-2xl mx-auto space-y-6 text-left">
        <div className="pb-4 border-b border-border-subtle/50">
          <p className="text-sm text-secondary leading-relaxed">
            Thank you for your interest in Esri. Your application has been received and sent to our Talent Acquisition team for review. We will contact you once a decision has been reached or if we need more information.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-1">
            <p className="data-label">Application Status</p>
            <p className="text-sm font-semibold text-secondary flex items-center gap-1.5 uppercase tracking-tight">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> Pending Review
            </p>
          </div>
          <div className="space-y-1">
            <p className="data-label">Submission ID</p>
            <p className="text-sm font-mono font-semibold text-secondary tracking-widest">{authCode}</p>
          </div>
          <div className="space-y-1">
            <p className="data-label">Desired Hourly Rate</p>
            <p className="text-lg font-display font-bold text-primary">${formData.desiredHourlyRate || '30'}.00 <span className="text-[10px] text-secondary-light font-sans font-normal lowercase">/ HR</span></p>
          </div>
          <div className="space-y-1">
            <p className="data-label">Submission Date</p>
            <p className="text-sm font-mono text-secondary-light">{timestamp}</p>
          </div>
        </div>
      </div>

      {/* Benefits & Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            <h3 className="section-header text-[11px] m-0">Esri Employee Benefits</h3>
          </div>
          <div className="bg-bg-soft rounded border border-border-subtle p-4">
            <ul className="grid grid-cols-1 gap-2">
              {[
                "Health & Wellness Coverage",
                "Professional Training & GIS Education",
                "Retirement Savings Plans",
                "Flexible Work Options",
                "Innovation & Growth Programs",
                "Paid Time Off & Holidays",
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-[10px] text-secondary font-semibold">
                  <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" />
            <h3 className="section-header text-[11px] m-0">What Happens Next?</h3>
          </div>
          <div className="dashboard-panel p-4 h-full flex flex-col pt-0">
            <div className="flex-grow pt-4">
              <p className="text-xs text-secondary-light leading-relaxed mb-4">
                Our recruitment team will review your credentials and experience. If your profile matches our requirements, we will reach out to schedule an interview. Please keep your Submission ID for your records.
              </p>
            </div>
            <div className="mt-auto border-t border-border-subtle pt-3">
              <p className="text-[9px] text-primary uppercase font-bold tracking-widest">
                Talent Acquisition Team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer action */}
      <div className="pt-8 flex flex-col justify-center items-center gap-4">
        <p className="text-[9px] text-secondary-light uppercase tracking-widest opacity-60 font-mono">
          Reference ID: {new Date().getTime().toString(16).toUpperCase()}
        </p>
      </div>
    </div>
  );
}
