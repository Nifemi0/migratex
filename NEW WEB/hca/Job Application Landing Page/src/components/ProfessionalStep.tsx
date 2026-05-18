import React from 'react';
import { FormData } from './ApplicationForm';

interface ProfessionalStepProps {
  formData: FormData;
  onNext: (data: Partial<FormData>) => void;
}

export function ProfessionalStep({ formData, onNext }: ProfessionalStepProps) {
  const [localData, setLocalData] = React.useState({
    strengths: formData.strengths,
    weaknesses: formData.weaknesses,
    professionalProfile: formData.professionalProfile,
    careerObjectives: formData.careerObjectives,
    understandsRemote: formData.understandsRemote,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(localData);
  };

  const isValid =
    localData.strengths &&
    localData.weaknesses &&
    localData.professionalProfile &&
    localData.careerObjectives &&
    localData.understandsRemote;

  const RadioCard = ({ label, value, current, onChange, name }: {
    label: string;
    value: string;
    current: string;
    onChange: (val: string) => void;
    name: string;
  }) => (
    <label className={`flex items-center gap-3 p-3 border rounded cursor-pointer transition-colors duration-200 ${current === value ? 'border-primary bg-primary/5' : 'border-border-subtle hover:border-primary/20 bg-white'}`}>
      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${current === value ? 'border-primary' : 'border-border-subtle'}`}>
        {current === value && <div className="w-2 h-2 bg-primary rounded-full animate-fade-in" />}
      </div>
      <input type="radio" name={name} value={value} checked={current === value} onChange={() => onChange(value)} className="hidden" required />
      <span className={`font-semibold text-xs transition-colors ${current === value ? 'text-secondary' : 'text-secondary-light'}`}>{label}</span>
    </label>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="border-b-2 border-primary w-fit pb-2 mb-6">
        <h2 className="text-xl font-display font-black text-secondary tracking-tighter uppercase">Phase Three: Professional Profile</h2>
        <p className="text-primary font-black text-[10px] uppercase tracking-widest mt-1">
          Career Overview & Skills Assessment
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="data-label">
              Professional Strengths & Areas for Growth <span className="text-primary">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <textarea
                required
                value={localData.strengths}
                onChange={(e) => setLocalData({ ...localData, strengths: e.target.value })}
                className="esri-input min-h-[80px] resize-y"
                placeholder="What are your main professional strengths?"
              />
              <textarea
                required
                value={localData.weaknesses}
                onChange={(e) => setLocalData({ ...localData, weaknesses: e.target.value })}
                className="esri-input min-h-[80px] resize-y"
                placeholder="Are there areas where you seek to improve?"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="data-label">
              Professional Summary <span className="text-primary">*</span>
            </label>
            <textarea
              required
              value={localData.professionalProfile}
              onChange={(e) => setLocalData({ ...localData, professionalProfile: e.target.value })}
              className="esri-input min-h-[100px] resize-y"
              placeholder="Briefly describe your work experience and key achievements..."
            />
          </div>

          <div className="space-y-2">
            <label className="data-label">
              Career Goals & Objectives <span className="text-primary">*</span>
            </label>
            <textarea
              required
              value={localData.careerObjectives}
              onChange={(e) => setLocalData({ ...localData, careerObjectives: e.target.value })}
              className="esri-input min-h-[100px] resize-y"
              placeholder="Where do you see yourself professionally in the next 3-5 years?"
            />
          </div>
        </div>

        {/* Remote setup awareness */}
        <div className="space-y-4 pt-6 border-t border-border-subtle/50">
          <div className="space-y-2">
            <label className="data-label">Remote Work Comfort Level <span className="text-primary">*</span></label>
            <p className="text-secondary-light text-[10px] -mt-1 leading-relaxed italic">
              Please confirm if you are comfortable working in a remote environment with online collaboration tools.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              <RadioCard label="Comfortable" value="yes" current={localData.understandsRemote} name="remoteAware" onChange={(v: string) => setLocalData({ ...localData, understandsRemote: v })} />
              <RadioCard label="Need more Info" value="need-clarification" current={localData.understandsRemote} name="remoteAware" onChange={(v: string) => setLocalData({ ...localData, understandsRemote: v })} />
            </div>
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className="esri-button w-full md:w-auto"
          >
            Continue to Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
