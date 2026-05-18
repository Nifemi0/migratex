import React from 'react';
import { FormData } from './ApplicationForm';

interface EligibilityStepProps {
  formData: FormData;
  onNext: (data: Partial<FormData>) => void;
}

export function EligibilityStep({ formData, onNext }: EligibilityStepProps) {
  const [localData, setLocalData] = React.useState({
    citizenship: formData.citizenship,
    hasGreenCard: formData.hasGreenCard,
    hasFelon: formData.hasFelon,
    drugFree: formData.drugFree,
    hasReference: formData.hasReference,
    referenceName: formData.referenceName,
    referencePhone: formData.referencePhone,
    positionType: formData.positionType,
    reasonForApplying: formData.reasonForApplying,
    hasCurrentJob: formData.hasCurrentJob,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(localData);
  };

  const isValid =
    localData.citizenship &&
    (localData.citizenship === 'yes' || localData.hasGreenCard) &&
    localData.hasFelon &&
    localData.drugFree &&
    localData.hasReference &&
    (localData.hasReference === 'no' || (localData.referenceName && localData.referencePhone)) &&
    localData.positionType &&
    localData.reasonForApplying &&
    localData.hasCurrentJob;

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
      <div className="bg-bg-soft border-l-4 border-l-primary p-4 rounded-r">
        <p className="text-xs text-secondary font-medium leading-relaxed">
          <span className="font-bold">Required Notice:</span> Please provide accurate information to ensure your application can be processed correctly.
        </p>
      </div>

      <div className="border-b border-primary/20 pb-3">
        <h2 className="text-lg font-display font-bold text-primary tracking-tight">Phase Two: Eligibility & Compliance</h2>
        <p className="text-secondary-light text-xs mt-1">
          Citizenship Status & Legal Requirements
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Citizenship & Legal status */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="data-label">
              Are you a U.S. Citizen? <span className="text-primary">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RadioCard label="Yes" value="yes" current={localData.citizenship} name="citizenship" onChange={(v: string) => setLocalData({ ...localData, citizenship: v })} />
              <RadioCard label="No" value="no" current={localData.citizenship} name="citizenship" onChange={(v: string) => setLocalData({ ...localData, citizenship: v })} />
            </div>
          </div>

          {localData.citizenship === 'no' && (
            <div className="space-y-2 animate-fade-in">
              <label className="data-label">
                Do you have a Green Card? <span className="text-primary">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <RadioCard label="Yes" value="yes" current={localData.hasGreenCard} name="greenCard" onChange={(v: string) => setLocalData({ ...localData, hasGreenCard: v })} />
                <RadioCard label="No" value="no" current={localData.hasGreenCard} name="greenCard" onChange={(v: string) => setLocalData({ ...localData, hasGreenCard: v })} />
              </div>
            </div>
          )}
        </div>

        {/* Legal & Compliance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="data-label">Have you ever been convicted of a felony? <span className="text-primary">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RadioCard label="No" value="no" current={localData.hasFelon} name="felon" onChange={(v: string) => setLocalData({ ...localData, hasFelon: v })} />
              <RadioCard label="Yes" value="yes" current={localData.hasFelon} name="felon" onChange={(v: string) => setLocalData({ ...localData, hasFelon: v })} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="data-label">Are you free from illegal drug use? <span className="text-primary">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RadioCard label="Yes" value="yes" current={localData.drugFree} name="drugFree" onChange={(v: string) => setLocalData({ ...localData, drugFree: v })} />
              <RadioCard label="No" value="no" current={localData.drugFree} name="drugFree" onChange={(v: string) => setLocalData({ ...localData, drugFree: v })} />
            </div>
          </div>
        </div>

        {/* References */}
        <div className="space-y-4 pt-6 border-t border-border-subtle/50">
          <label className="data-label">Work References <span className="text-primary">*</span></label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <RadioCard label="Available" value="yes" current={localData.hasReference} name="hasRef" onChange={(v: string) => setLocalData({ ...localData, hasReference: v })} />
            <RadioCard label="Unavailable" value="no" current={localData.hasReference} name="hasRef" onChange={(v: string) => setLocalData({ ...localData, hasReference: v })} />
          </div>

          {localData.hasReference === 'yes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 animate-fade-in">
              <input
                type="text"
                placeholder="Reference Name"
                value={localData.referenceName}
                onChange={(e) => setLocalData({ ...localData, referenceName: e.target.value })}
                className="esri-input"
              />
              <input
                type="tel"
                placeholder="Reference Phone Number"
                value={localData.referencePhone}
                onChange={(e) => setLocalData({ ...localData, referencePhone: e.target.value })}
                className="esri-input"
              />
            </div>
          )}
        </div>

        {/* Commitment */}
        <div className="space-y-6 pt-6 border-t border-border-subtle/50">
          <div className="space-y-2">
            <label className="data-label">Position Type <span className="text-primary">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RadioCard label="Full-Time" value="full-time" current={localData.positionType} name="posType" onChange={(v: string) => setLocalData({ ...localData, positionType: v })} />
              <RadioCard label="Part-Time" value="part-time" current={localData.positionType} name="posType" onChange={(v: string) => setLocalData({ ...localData, positionType: v })} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="data-label">Are you currently employed? <span className="text-primary">*</span></label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <RadioCard label="Yes" value="yes" current={localData.hasCurrentJob} name="currentJob" onChange={(v: string) => setLocalData({ ...localData, hasCurrentJob: v })} />
              <RadioCard label="No" value="no" current={localData.hasCurrentJob} name="currentJob" onChange={(v: string) => setLocalData({ ...localData, hasCurrentJob: v })} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="data-label">Why do you want to work at Esri? <span className="text-primary">*</span></label>
            <textarea
              required
              value={localData.reasonForApplying}
              onChange={(e) => setLocalData({ ...localData, reasonForApplying: e.target.value })}
              className="esri-input min-h-[100px] resize-y"
              placeholder="Tell us about your motivation..."
            />
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

